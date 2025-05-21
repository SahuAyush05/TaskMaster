import { CheckCircle, Clock, FileText } from "lucide-react";

export default function FeatureCard() {
  const features = [
    {
      icon: <CheckCircle className="h-12 w-12 text-gray-900" />,
      title: "Task Management",
      subtitle: "Create, update, and delete tasks with ease",
      description:
        "Organize your work with a powerful task management system that lets you track progress and prioritize effectively.",
    },
    {
      icon: <Clock className="h-12 w-12 text-gray-900" />,
      title: "Deadline Tracking",
      subtitle: "Never miss a deadline again",
      description:
        "Set due dates, track upcoming deadlines, and filter tasks based on priority to stay on top of your work.",
    },
    {
      icon: <FileText className="h-12 w-12 text-gray-900" />,
      title: "Document Attachments",
      subtitle: "Attach documents to your tasks",
      description:
        "Upload and attach up to 3 PDF documents to each task, making it easy to share important information.",
    },
  ];
  return (
    <div className=" px-4 py-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-10 ">
      {features.map((feature) => (
        <div className="bg-white rounded-lg p-6 flex flex-col items-start" key={feature.title}>
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{feature.subtitle}</p>
          <p className="text-gray-800 justify-start text-start">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
