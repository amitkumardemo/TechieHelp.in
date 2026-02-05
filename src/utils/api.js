const API_BASE_URL = 'http://localhost:5000/api';

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getAuthHeaders() {
    const token = localStorage.getItem('lms_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders(),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth
  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.token) {
      localStorage.setItem('lms_token', response.token);
      localStorage.setItem('lms_user', JSON.stringify(response.user));
    }

    return response;
  }

  logout() {
    localStorage.removeItem('lms_token');
    localStorage.removeItem('lms_user');
  }

  getCurrentUser() {
    const user = localStorage.getItem('lms_user');
    return user ? JSON.parse(user) : null;
  }

  // Courses
  async getCourses() {
    return this.request('/courses');
  }

  async createCourse(courseData) {
    return this.request('/courses', {
      method: 'POST',
      body: JSON.stringify(courseData),
    });
  }

  async getCourse(courseId) {
    return this.request(`/courses/${courseId}`);
  }

  async updateCourse(courseId, courseData) {
    return this.request(`/courses/${courseId}`, {
      method: 'PUT',
      body: JSON.stringify(courseData),
    });
  }

  async deleteCourse(courseId) {
    return this.request(`/courses/${courseId}`, {
      method: 'DELETE',
    });
  }

  async createModule(courseId, moduleData) {
    return this.request(`/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(moduleData),
    });
  }

  async createLesson(courseId, moduleId, lessonData) {
    return this.request(`/courses/${courseId}/modules/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify(lessonData),
    });
  }

  async updateLessonProgress(courseId, lessonId, progressData) {
    return this.request(`/courses/${courseId}/lessons/${lessonId}/progress`, {
      method: 'POST',
      body: JSON.stringify(progressData),
    });
  }

  // Assignments
  async getAssignments(courseId) {
    return this.request(`/courses/${courseId}/assignments`);
  }

  async createAssignment(courseId, assignmentData) {
    return this.request(`/courses/${courseId}/assignments`, {
      method: 'POST',
      body: JSON.stringify(assignmentData),
    });
  }

  async updateAssignment(courseId, assignmentId, assignmentData) {
    return this.request(`/courses/${courseId}/assignments/${assignmentId}`, {
      method: 'PUT',
      body: JSON.stringify(assignmentData),
    });
  }

  async deleteAssignment(courseId, assignmentId) {
    return this.request(`/courses/${courseId}/assignments/${assignmentId}`, {
      method: 'DELETE',
    });
  }

  // Projects
  async getProjects(courseId) {
    return this.request(`/courses/${courseId}/projects`);
  }

  async createProject(courseId, projectData) {
    return this.request(`/courses/${courseId}/projects`, {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(courseId, projectId, projectData) {
    return this.request(`/courses/${courseId}/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(courseId, projectId) {
    return this.request(`/courses/${courseId}/projects/${projectId}`, {
      method: 'DELETE',
    });
  }

  // Students
  async getStudents() {
    return this.request('/students');
  }

  async createStudent(studentData) {
    return this.request('/students', {
      method: 'POST',
      body: JSON.stringify(studentData),
    });
  }

  async enrollStudent(studentId, courseId) {
    return this.request(`/students/${studentId}/enroll/${courseId}`, {
      method: 'POST',
    });
  }

  async getStudentDashboard() {
    return this.request('/students/dashboard');
  }

  async submitAssignment(assignmentId, submissionData) {
    return this.request(`/students/assignments/${assignmentId}/submit`, {
      method: 'POST',
      body: JSON.stringify(submissionData),
    });
  }

  async submitProject(projectId, submissionData) {
    return this.request(`/students/projects/${projectId}/submit`, {
      method: 'POST',
      body: JSON.stringify(submissionData),
    });
  }

  async getStudentAssignments() {
    return this.request('/students/assignments');
  }

  async getStudentProjects() {
    return this.request('/students/projects');
  }

  // Batches
  async getBatches() {
    return this.request('/batches');
  }

  async createBatch(batchData) {
    return this.request('/batches', {
      method: 'POST',
      body: JSON.stringify(batchData),
    });
  }

  async getBatch(batchId) {
    return this.request(`/batches/${batchId}`);
  }

  async updateBatch(batchId, batchData) {
    return this.request(`/batches/${batchId}`, {
      method: 'PUT',
      body: JSON.stringify(batchData),
    });
  }

  async deleteBatch(batchId) {
    return this.request(`/batches/${batchId}`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient();
