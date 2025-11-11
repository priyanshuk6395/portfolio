const SkillTag = ({ skill }) => {
  return (
    <span className="
      bg-gray-100 text-gray-700 border border-gray-200
      
      dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800
      
      rounded-md px-3 py-1 text-sm font-medium"
    >
      {skill}
    </span>
  );
};

export default SkillTag;