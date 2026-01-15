const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  throw new Error("Something went wrong!");
};

export default AboutPage;
