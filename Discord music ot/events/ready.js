module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Wyyat play tennis", {
    type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
