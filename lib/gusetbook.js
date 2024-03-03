export const getAllMessages = async () => {
  try {
    const messages = await fetch("/api/route");
    return messages;
  } catch (error) {
    throw new Error("faile to get messages from db ");
  }
};
