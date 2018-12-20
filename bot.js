client.on('guildMemberAdd', (member) => {
    var channel = member.guild.channels.find('name', 'moments-📖');
channel.send(`@${member.user.tag} تم اعطاء العضو رتبت ممبر`)
member.addRole(member.guild.roles.find('name', '-Moments'));
});
