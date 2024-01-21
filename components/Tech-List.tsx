interface iprops {
  title: string;
}

export function TechTopics(skills) {
  return (
    <div className="bg-light-gray text-dark-gray px-32 py-24 rounded-lg text-center max-w-2xl">
      <strong>{skills.props}</strong>
    </div>
  );
}
