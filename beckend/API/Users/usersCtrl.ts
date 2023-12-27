export const login = async (req: any, res: any) => {
  try {
    console.log("getUserName from client");
    const user = req.body;
    if (!user.username || !user.password)
      throw new Error(
        `User ${user.username} and ${user.password} is not fount`
      );
    if (user) res.send({ process: "Success" });
  } catch (error) {
    console.error(error);
  }
};
