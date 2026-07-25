function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-8 rounded-2xl max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="text-gray-400 mb-4">
          {project.description}
        </p>

        <p className="text-purple-400 mb-6">
          {project.tech}
        </p>

        <p className="text-gray-400 mb-2">
          Client: {project.client}
        </p>

        <p className="text-gray-400 mb-6">
          Timeline: {project.timeline}
        </p>

        <button
          onClick={onClose}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProjectModal;