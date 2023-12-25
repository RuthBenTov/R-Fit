export const addUser = async (req: any, res: any) => {
  try {
    console.log(
      "getUserName from client"
    )
    const user = req.body;
    if (user) res.send({ process: "Success" });
    
  } catch (error) {
    console.error(error);
  }
};
