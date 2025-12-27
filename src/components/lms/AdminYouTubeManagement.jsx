import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import LMSLayout from './LMSLayout';
import { Plus, Edit, Trash2, Youtube, Save, X, Globe, Link as LinkIcon } from 'lucide-react';

const AdminYouTubeManagement = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingResource, setEditingResource] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    youtubeUrl: '',
    domain: '',
    thumbnail: '',
    tags: []
  });

  const domains = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Machine Learning',
    'AI & ChatGPT',
    'DevOps',
    'Cybersecurity',
    'Cloud Computing',
    'Blockchain',
    'UI/UX Design',
    'Game Development',
    'Other'
  ];

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'youtubeResources'));
      const resourcesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setResources(resourcesData);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractYouTubeVideoId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const fetchYouTubeData = async (url) => {
    const videoId = extractYouTubeVideoId(url);
    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }

    try {
      // Using YouTube Data API v3 (you'll need to add your API key)
      const API_KEY = 'YOUR_YOUTUBE_API_KEY'; // Replace with actual API key
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const video = data.items[0].snippet;
        return {
          title: video.title,
          description: video.description,
          thumbnail: video.thumbnails.maxres?.url || video.thumbnails.high?.url || video.thumbnails.default?.url
        };
      } else {
        // Fallback: extract basic info from URL
        return {
          title: `YouTube Video ${videoId}`,
          description: 'Video description not available',
          thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        };
      }
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
      // Fallback
      return {
        title: `YouTube Video ${videoId}`,
        description: 'Video description not available',
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      };
    }
  };

  const handleAddResource = async () => {
    if (!formData.youtubeUrl || !formData.domain) return;

    try {
      setLoading(true);
      const videoData = await fetchYouTubeData(formData.youtubeUrl);
      const videoId = extractYouTubeVideoId(formData.youtubeUrl);

      await addDoc(collection(db, 'youtubeResources'), {
        ...formData,
        ...videoData,
        videoId,
        createdAt: new Date(),
        tags: formData.tags || []
      });

      setFormData({ title: '', description: '', youtubeUrl: '', domain: '', thumbnail: '', tags: [] });
      setShowAddForm(false);
      fetchResources();
    } catch (error) {
      console.error('Error adding resource:', error);
      alert('Error adding resource. Please check the YouTube URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateResource = async () => {
    if (!editingResource || !formData.youtubeUrl || !formData.domain) return;

    try {
      setLoading(true);
      const videoData = await fetchYouTubeData(formData.youtubeUrl);
      const videoId = extractYouTubeVideoId(formData.youtubeUrl);

      await updateDoc(doc(db, 'youtubeResources', editingResource.id), {
        ...formData,
        ...videoData,
        videoId,
        updatedAt: new Date()
      });

      setEditingResource(null);
      setFormData({ title: '', description: '', youtubeUrl: '', domain: '', thumbnail: '', tags: [] });
      fetchResources();
    } catch (error) {
      console.error('Error updating resource:', error);
      alert('Error updating resource. Please check the YouTube URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteResource = async (resourceId) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;

    try {
      await deleteDoc(doc(db, 'youtubeResources', resourceId));
      fetchResources();
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  const startEditResource = (resource) => {
    setEditingResource(resource);
    setFormData({
      title: resource.title || '',
      description: resource.description || '',
      youtubeUrl: resource.youtubeUrl || '',
      domain: resource.domain || '',
      thumbnail: resource.thumbnail || '',
      tags: resource.tags || []
    });
  };

  const cancelEdit = () => {
    setEditingResource(null);
    setFormData({ title: '', description: '', youtubeUrl: '', domain: '', thumbnail: '', tags: [] });
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (!formData.tags.includes(newTag)) {
        setFormData({
          ...formData,
          tags: [...formData.tags, newTag]
        });
      }
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  if (loading && resources.length === 0) {
    return (
      <LMSLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </LMSLayout>
    );
  }

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">YouTube Resources Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage YouTube video resources for students</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add YouTube Resource</span>
          </button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingResource) && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {editingResource ? 'Edit YouTube Resource' : 'Add New YouTube Resource'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  YouTube URL *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    value={formData.youtubeUrl}
                    onChange={(e) => setFormData({...formData, youtubeUrl: e.target.value})}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Domain *
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({...formData, domain: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select Domain</option>
                  {domains.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Custom Title (Optional)
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Leave empty to auto-fetch from YouTube"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Custom Description (Optional)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Leave empty to auto-fetch from YouTube"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  onKeyPress={handleTagInput}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Type tag and press Enter"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={cancelEdit}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center space-x-2"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={editingResource ? handleUpdateResource : handleAddResource}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{loading ? 'Saving...' : (editingResource ? 'Update' : 'Add')} Resource</span>
              </button>
            </div>
          </div>
        )}

        {/* Resources List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              {resource.thumbnail && (
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${resource.videoId}/maxresdefault.jpg`;
                  }}
                />
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {resource.title}
                    </h3>
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 mb-2">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>{resource.domain}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-2">
                    <button
                      onClick={() => startEditResource(resource)}
                      className="p-1 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteResource(resource.id)}
                      className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {resource.tags && resource.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{resource.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <a
                  href={resource.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Youtube className="h-4 w-4" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {resources.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
            <Youtube className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No YouTube resources yet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Add your first YouTube resource to get started.
            </p>
          </div>
        )}
      </div>
    </LMSLayout>
  );
};

export default AdminYouTubeManagement;
