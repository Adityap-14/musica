const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "leave",
        aliases: ["die", "disconnect"],
        description: "Leave The Voice Channel!",
        usage: "Leave",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("Join a vc before you can play music", message.channel);
        if (!message.guild.me.voice.channel) return sendError("I Am Not In Any Voice Channel!", message.channel);

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return sendError("leaving.", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Leave Voice Channel", "")
            .setColor("GREEN")
            .setTitle("")
            .setDescription("No more music :(")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send(" Left The Voice Channel :C"));
    },
};
