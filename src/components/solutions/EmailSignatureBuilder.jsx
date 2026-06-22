import { useState, useEffect } from "react";
import { Save, Eye, Edit2, User, Building, Phone, Globe, Mail, CheckCircle, Loader2 } from "lucide-react";

const BACKEND = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000";

export default function EmailSignatureBuilder({ workspaceId }) {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    company: "",
    phone: "",
    website: "",
    logoUrl: "",
  });
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!workspaceId) return;
    fetch(`${BACKEND}/api/gmail/signature?workspaceId=${workspaceId}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setForm({
            name: data.name ?? "",
            designation: data.designation ?? "",
            company: data.company ?? "",
            phone: data.phone ?? "",
            website: data.website ?? "",
            logoUrl: data.logoUrl ?? "",
          });
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [workspaceId]);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch(`${BACKEND}/api/gmail/signature`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workspaceId, ...form }),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const SignaturePreview = () => (
    <div className="card-glass flex flex-col">
      <div className="border-t-2 border-[#38bdf8]/40 pt-3 space-y-1">
        {form.name && <p className="text-sm font-bold text-gray-900 dark:text-white">{form.name}</p>}
        {(form.designation || form.company) && (
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {[form.designation, form.company].filter(Boolean).join(" | ")}
          </p>
        )}
        {form.phone && (
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Phone className="w-3 h-3" /> {form.phone}
          </p>
        )}
        {form.website && (
          <p className="text-xs text-[#38bdf8] flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <a href={form.website} className="hover:underline">{form.website}</a>
          </p>
        )}
        {!form.name && !form.designation && !form.company && (
          <p className="text-xs text-gray-600 italic">Fill in fields to preview your signature</p>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <Loader2 className="w-5 h-5 text-[#38bdf8] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Email Signature</h3>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Automatically appended to all AI-generated email replies.
          </p>
        </div>
        <button
          onClick={() => setPreview(!preview)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white rounded-lg text-[10px] font-mono transition-all"
        >
          {preview ? <><Edit2 className="w-3 h-3" /> Edit</> : <><Eye className="w-3 h-3" /> Preview</>}
        </button>
      </div>

      {preview ? (
        <SignaturePreview />
      ) : (
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-mono uppercase flex items-center gap-1">
                <User className="w-3 h-3" /> Full Name
              </label>
              <input
                type="text"
                placeholder="Amit Kumar"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-mono uppercase flex items-center gap-1">
                <Building className="w-3 h-3" /> Designation
              </label>
              <input
                type="text"
                placeholder="CEO & Founder"
                value={form.designation}
                onChange={e => setForm(p => ({ ...p, designation: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-mono uppercase flex items-center gap-1">
                <Building className="w-3 h-3" /> Company
              </label>
              <input
                type="text"
                placeholder="TechieHelp.in"
                value={form.company}
                onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] text-gray-500 font-mono uppercase flex items-center gap-1">
                <Phone className="w-3 h-3" /> Phone
              </label>
              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
              />
            </div>
            <div className="space-y-1.5 col-span-2">
              <label className="text-[9px] text-gray-500 font-mono uppercase flex items-center gap-1">
                <Globe className="w-3 h-3" /> Website
              </label>
              <input
                type="url"
                placeholder="https://techiehelp.in"
                value={form.website}
                onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.06] focus:border-[#38bdf8]/40 p-2 rounded-lg text-xs text-gray-900 dark:text-white outline-none placeholder-gray-600"
              />
            </div>
          </div>

          {/* Live preview */}
          <div>
            <p className="text-[9px] text-gray-600 font-mono uppercase mb-2">Live Preview</p>
            <SignaturePreview />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2 bg-[#38bdf8] hover:bg-[#0284c7] text-[#030307] font-bold text-xs rounded-lg transition-all"
          >
            {saving ? (
              <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...</>
            ) : saved ? (
              <><CheckCircle className="w-3.5 h-3.5" /> Saved!</>
            ) : (
              <><Save className="w-3.5 h-3.5" /> Save Signature</>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
