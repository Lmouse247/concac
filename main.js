// Code by PhucXingum!!!!

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;
const { exec } = require("child_process");

var avtOwner =
  "https://cdn.discordapp.com/avatars/1011242519218094121/a_be8cda67baf5745dff9c5519b83761b9.gif?size=1024";
var nameOwner = "! PhucXingum";
var name_server = " | Convergence Of Essence";
var invite_discord = "https://discord.gg/BRy9G4SFnK";

(ping_role_id = {
  boss: "",
  sword: "",
  mirage: "",
  haki: {
    normal: "",
    legend: "",
  },
  fullmoon: "",
  near_full_moon: "",
  fruit_drop: "",
}),
  (noti_config = {
    random_anime_picture: process.env.random_anime_picture,
    boss: process.env.config_boss,
    mirage: process.env.config_mirage,
    haki: {
      legend: process.env.config_haki_legend,
    },
    fullmoon: process.env.config_fullmoon,
    fruit_dropped: process.env.config_fruit_dropped,
    king_legacy: process.env.config_king_legacy,
    near: true,
  });

const mirage_azu =
  "https://discord.com/api/webhooks/1333835733672263822/hHQvcjcs6C7ROPJ-MVyuxljB6TCo9LZU0R_90ITlMm2N9y4B7O6N5DjgTiqlVbLEaACA";
const rare_boss =
  "https://discord.com/api/webhooks/1333836103341572188/baBwyPb_CDnbKzNAdJtc644Zv4oFfYIUZPvtNfSdJNw-Hzc43wuJNIE248ii-3ddFzgr";
const fullmoon =
  "https://discord.com/api/webhooks/1333834595065397382/mqahr2bX3d267VawhN4WnJeWrqnAqbyRhWHKX-HjMAi6oR7eIFdMr0gQQoUq2I3rLq-B";
const near_full_moon =
  "https://discord.com/api/webhooks/1333835519494328342/OSnLSgd4i3wFsU7KG0EsEGVRHlrxwK_A2hWuieh89lORkUK8QO8ExTXLVBt4H5fD4FQA";
const sword =
  "https://discord.com/api/webhooks/1333836275358240829/ZuUca5TRCAk9OtBZDucpBNc_GHQ1ylFFFDiA5veIMOQzQOSfA3NtpzUR4_9Yhy6RYLN8";
const haki_legend =
  "https://discord.com/api/webhooks/1285721091326611487/Pr3PfJpMQGxhaPKI8K_5dwyW2fA_S0eqVSH_tcnA7r8sxErBOZBU2WHr7LXw3aiv8np-";
const king_legacy = 
  "https://discord.com/api/webhooks/1333839004260499538/TMTJE8Wtw64DFVDeflT1L9CDiZAL5F0fJbmk3roSLDs2mB5zyRpcLbJxA_qbKiw5_WqH";

const { execSync } = require("child_process");

function checkAndInstallPackage(packageName) {
  try {
    require.resolve(packageName);
    console.log(
      `Package Name: ${packageName} Is Already Installed On Your Device.`
    );
  } catch (e) {
    console.log(
      `Package Name: ${packageName} Is Not Installed And Please Wait To Install It......`
    );
    try {
      execSync(`npm install ${packageName}`, { stdio: "inherit" });
      console.log(`${packageName} Has Been Installed Successfully.`);
    } catch (installError) {
      console.error(
        `Failed To Install: ${packageName}, Please Install It Manually!`
      );
      process.exit(1);
    }
  }
}

checkAndInstallPackage("discord.js-selfbot-v13");
checkAndInstallPackage("discord.js");
checkAndInstallPackage("axios");

console.log("All Necessary Packages Installed To Use Webhooks On Your Device.");

const { Client, Intents } = require("discord.js-selfbot-v13");
const { WebhookClient, EmbedBuilder } = require("discord.js");
const { default: axios } = require("axios");
const express = require('express');

const app = express()


app.get('/api-status-webhock-notify', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API status is OK',
  });
  res.status(200).end();
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

const client1 = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: false,
});

const client2 = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: false,
});

client1.on("ready", async () => {
  console.log(`Successfully Connected To 1st Token`);
  client1.user.setStatus("invisible");
});

client2.on("ready", async () => {
  console.log(`Successfully Connected To 2nd Token`);
  client1.user.setStatus("invisible");
});

client1.on("messageCreate", async (message) => {
  const channel = message.channelId;
  if (channel == "1275453393082650726") {
    // mirage w-azure
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: mirage_azu });
    const concac = data[2].value.replace(/`/g, "");
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        new EmbedBuilder()
          .setTitle("Mirage Island" + name_server)
          .setURL(invite_discord)
          .addFields(
            {
              name: "**[🏝️] __Mirage Spawn:__**",
              value: `\`\`\`✅\`\`\``,
            },
            {
              name: `**[⏳] __${data[1].name}:__**`,
              value: data[1].value,
            },
            {
              name: "**[👤] __Players In Server:__**",
              value: data[0].value,
            },
            {
              name: "**[🔗] __Job ID:__**",
              value: data[2].value,
            },
            {
              name: "**[🔗] __Job ID (Mobile):__**",
              value: concac,
            },
            {
              name: "**[📜] __Script Join:__**",
              value: data[3].value,
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value: data[4].value,
            }
          )
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  } else if (channel == "1328924447838699622") {
    // rare boss azu
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: rare_boss });
    const caccon = data[2].value.replace(/`/g, "");
    webhook.send({
      content: ping_role_id.boss,
      embeds: [
        new EmbedBuilder()
          .setTitle(" Boss Spawn" + name_server)
          .setURL(invite_discord)
          .addFields(
            {
              name: "**[👺] __Boss Name:__**",
              value: data[1].value,
            },
            {
              name: "**[👥] __Player:__**",
              value: data[0].value,
            },
            {
              name: "**[🔗] __Job ID:__**",
              value: data[2].value,
            },
            {
              name: "**[🔗] __Job ID (Mobile):__**",
              value: caccon,
            },
            {
              name: "**[📜] __Script Join:__**",
              value: data[3].value,
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value: data[4].value,
            }
          )
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  } else if (channel == "1327772516004925481") {
    // sword azu
    const data = message.embeds[0].fields;
    const caccon = data[2].value.replace(/`/g, "");
    const webhook = new WebhookClient({ url: sword });
    webhook.send({
      content: ping_role_id.sword,
      embeds: [
        new EmbedBuilder()
          .setTitle("Sword Legend" + name_server)
          .setURL(invite_discord)
          .addFields(
            { name: "**[⚔️] __Sword Name:__**", value: data[1].value },
            {
              name: "**[👤] __Players In Server:__**",
              value: data[0].value,
            },
            {
              name: "**[🔗] __Job ID:__**",
              value: data[2].value,
            },
            {
              name: "**[🔗] __Job ID (Mobile):__**",
              value: caccon,
            },
            {
              name: "**[📜] __Script Join:__**",
              value: data[3].value,
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value: data[4].value,
            }
          )

          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  } else if (channel == "1275449457864867894") {
    // near moon w-azre
    const data = message.embeds[0].fields;
    const caccon = data[3].value.replace(/`/g, "");
    const webhook = new WebhookClient({ url: near_full_moon });
    webhook.send({
      content: ping_role_id.near,
      embeds: [
        new EmbedBuilder()
          .setTitle("Near Full Moon" + name_server)
          .setURL(invite_discord)
          .addFields(
            { name: "**[👤] __Player Count:__**", value: data[0].value },
            {
              name: "**[⏳] __Time Till Full Moon:__**",
              value: data[1].value,
            },
            { name: "**[🔗] __Job ID:__**", value: data[3].value },
            { name: "**[🔗] __Job ID (Mobile):__**", value: caccon },
            {
              name: "**[📜] __Script Join:__**",
              value: data[4].value,
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value: data[5].value,
            }
          )
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  } else if (channel == "1273287916465946668") {
    // full moon azuze
    const data = message.embeds[0].fields;
    let job_id = data[3].value.replace(/`/g, "");
    const webhook = new WebhookClient({ url: fullmoon });
    webhook.send({
      content: ping_role_id.fullmoon,
      embeds: [
        new EmbedBuilder()
          .setTitle("Full Moon" + name_server)
          .setURL(invite_discord)
          .addFields(
            { name: "**[🌑] __Full Moon:__**", value: `\`\`\`✅\`\`\`` },
            { name: "**[👤] __Player Count:__**", value: data[0].value },
            {
              name: "**[⏳] __Time Remaining:__**",
              value: data[1].value,
            },
            { name: "**[👤] __Is Night:__**", value: data[2].value },
            {
              name: "**[🔗] __Job ID:__**",
              value: data[3].value,
            },
            {
              name: "**[🔗] __Job ID (Mobile):__**",
              value: job_id,
            },
            {
              name: "**[📜] __Script Join:__**",
              value: data[4].value,
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value: data[5].value,
            }
          )

          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  }
});

client2.on("messageCreate", async (message) => {
  const channel = message.channelId;
  if (channel == "1088023824555053097") {
    const data = message.embeds[0].fields;
    let job_id = data[3].value.replace(/`/g, "");
    let script_join = data[4].value.replace(/`/g, "");
    const webhook = new WebhookClient({
      url: haki_legend,
    });
    webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        new EmbedBuilder()
          .setTitle("Haki Legendary" + name_server)
          .setURL(invite_discord)
          .addFields(
            { name: "**[🌈] __Color Haki:__**", value: data[0].value },
            {
              name: "**[🌏] __World (Sea):__**",
              value: data[1].value,
            },
            {
              name: "**[👤] __Players In Server:__**",
              value: data[2].value,
            },
            {
              name: "**[🔗] __Job ID:__**",
              value: "```" + job_id + "```",
            },
            {
              name: "**[🔗] __Job ID (Mobile):__**",
              value: data[3].value,
            },
            {
              name: "**[📜] __Script Join:__**",
              value: "```" + data[4].value + "```",
            },
            {
              name: "**[📜] __Script Join (Mobile):__**",
              value:
                `game:GetService("ReplicatedStorage").__ServerBrowser:InvokeServer("teleport","` +
                job_id +
                `")`,
            }
          )
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  } else if (channel == "1184516926651768954") {
    // king legacy maru
    const data = message.embeds[0].fields;
    let job_id = data[3].value.replace(/`/g, "");
    let script_join = data[4].value.replace(/`/g, "");
    const webhook = new WebhookClient({
      url: king_legacy
    });
    webhook.send({
      embeds: [
        new EmbedBuilder()
          .setTitle("ɴᴏᴛɪғʏ ʙᴏss ᴋɪɴɢ ʟᴇɢᴀᴄʏ ")
          .setURL(invite_discord)
          .addFields(
            { name: "**[🐯] - __Boss Name :__**", value: data[2].value },
            {
              name: "**[⏳] - __Server Time :__**",
              value: data[0].value,
            },
            {
              name: "**[👥] - __Players In Server :__**",
              value: data[1].value,
            },
            {
              name: "**[🔗] - __Job ID:__**",
              value: "```" + data[3].value + "```",
            },
            {
              name: "**[🔗] - __Job ID (Mobile):__**",
              value: data[3].value,
            },
            {
              name: "**[📋] - __Script Join:__**",
              value: "```" + data[4].value + "```",
            },
            {
              name: "**[📋] - __Script Join (Mobile):__**",
              value: data[4].value,
            }
          )
          .setTimestamp(Date.now())
          .setColor("ffffff")
          .setFooter({
            text: `Created By: @${nameOwner}` + " " + invite_discord,
            iconURL: avtOwner,
          }),
      ],
    });
  }
});

client1.login(token1);
client2.login(token2)