/* Recode By Wudysoft */
import fetch from 'node-fetch';
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    text,
    args
}) => {
let epho = ["american",
"anonymous",
"aov",
"arrow2",
"arrow",
"blackpink",
"cake",
"caper",
"cloth",
"cloud",
"coverpubg",
"crank",
"dragonfire",
"eraser",
"foggy",
"glasses",
"graffiti",
"greenbrush",
"hallowen",
"horror",
"incandescent",
"leafgraphy",
"letters",
"metals",
"ml",
"neonblue",
"neonbp",
"nightstars",
"pig",
"pubgavatar",
"puppy",
"sunlight",
"television",
"tiger",
"typography2",
"typography",
"warface",
"water"]

let epho2 = ["buoys",
"heated",
"pencil",
"quotestatus",
"wood"]

let ephotox = ["3d-crack-text-effect-online",
"3d-underwater",
"3d-wood",
"3damerican-flag",
"3dglue-realistic",
"3dgradient2",
"3dgradient",
"3dmetal-effect",
"3dmetal-text-",
"3dmulticolor-papercut",
"3dpig-gif",
"3druby-stone",
"3dsand-engraved",
"3dshiny-metallic",
"3dsparkle-christmas",
"3dsub-zombie",
"3dtext-effect2",
"3dtext-effect3",
"3dtext-effect",
"3dtext-pig",
"3dvalentine-cards",
"3dxmas-cards2",
"3dxmas-cards",
"83day-card2",
"83day-card3",
"83day-card4",
"83day-card",
"advanced-glow",
"ahri-league-of-legends",
"alice-league-of-kings",
"amily-arena-of-valor",
"angels-wings",
"anonymous-neon",
"art-shader",
"azzenka-league-of-kings",
"balloon-noel",
"bats-halloween",
"bear2",
"bee",
"birthday-cake2",
"birthday-cake3",
"birthday-cake4",
"birthday-cake5",
"birthday-cake6",
"birthday-cake7",
"birthday-cake8",
"birthday-cake9",
"birthday-cake10",
"birthday-cake",
"birthday-cards",
"birthdayfoil-balloon",
"blackpink-neon",
"blackpink",
"blackskin-snake",
"blood-frosted",
"blood-steel",
"blood-text2",
"blood-text",
"blood-wall",
"blue-effect",
"blue-neon",
"bokeh-text",
"boom-comic",
"broken-glass",
"bulb-effect",
"cake-text2",
"cake-text3",
"cake-text",
"candy-text",
"card-christmas2",
"card-christmas",
"cartoon-graffiti",
"christmas-snow",
"christmas-tree",
"christmasball-ornaments",
"circle-mascot-team",
"cloth-effect",
"cloud-sky",
"clouds-sky",
"color-fireworks",
"colorful-angelwing",
"cool-metal",
"cute-girl-gamer",
"cute-typography",
"dance-effect",
"dancing-santaclaus",
"darkgreen-typography",
"darth-vader",
"decorated-cookie",
"deluxe-gold",
"deluxe-silver",
"dinamo-effect",
"double-exposure",
"dragon-fire",
"equalizer-blue",
"equalizer-effect",
"eraser-effect",
"evelynn-league-of-legends",
"fabric-effect2",
"fabric-effect",
"facebook-gold-play-button",
"facebook-silver-play-button",
"firework-effect2",
"firework-effect",
"flower-card",
"flower-effect",
"football-club2",
"fps-game",
"fun-certify2",
"fun-certify",
"galaxy-angel",
"galaxy-angelwings",
"galaxy-effect2",
"galaxy-effect",
"galaxy-text2",
"galaxy-text3",
"galaxy-text4",
"galaxy-text5",
"galaxy-text",
"galaxyangel-wings",
"gankk-league-of-kings",
"gemstone-effect",
"glitter-gold",
"glossy-carbon",
"glowing-effect",
"gold-effect2",
"gold-effect3",
"gold-effect",
"gold-text2",
"gold-text",
"golden-text",
"graffiti-text2",
"graffiti-text3",
"graffiti-text4",
"graffiti-text5",
"graffiti-text",
"green-brush",
"green-fireworks",
"greenskin-snake",
"greeting-cards",
"greetingcard-birthday2",
"greetingcard-birthday",
"halloween-fire",
"halloween-frankenstain",
"halloween-text2",
"halloween-text",
"halloween-videocard",
"hand-love2",
"hand-love",
"handwritten-foggyglass",
"happynewyear-firework",
"heart-cup",
"heart-flashlight",
"heart-wings",
"holographic-effect",
"horror-gift",
"icecream-chocolate",
"jean-text-effect",
"jewel-effect",
"joker",
"kahlii-arena-of-valor",
"kaisa-league-of-legends",
"leaves-text",
"lend-effect",
"light-effect",
"light-neonsign",
"lightfuturistic-technology",
"lightning-pubg-video",
"lol-fiora",
"lol-master-yi",
"lol-notice",
"lol-zed",
"luxury-gold",
"magic-effect",
"matrix",
"metal-darkgold",
"metal-eagle",
"metal-effect",
"metal-headshot",
"metal-lion",
"metal-logo",
"metal-star",
"metal-text",
"metallic-text",
"mganga-league-of-kings",
"minimal-logomaker",
"mobile-legends",
"modern-gold3",
"modern-gold4",
"modern-gold5",
"modern-goldgreen",
"modern-goldpurple",
"modern-goldred2",
"modern-goldred",
"modern-goldsliver",
"my-love",
"name-football",
"neon-brightblue",
"neon-devilwing",
"neon-satin",
"neon-valentine",
"neonlight-galaxy",
"newyear-greeting2",
"newyear-greeting3",
"newyear-greeting",
"ninja-mascot",
"orangeskin-snake",
"paper-cutout",
"paperclip-quote",
"papercut-effect",
"personalized-christmas",
"personalized-queen",
"pikachu",
"project-yasuo",
"pubg-birthdaycake",
"pubg-maker2",
"pubg-maker3",
"pubg-maker4",
"pubg-maker",
"purple-effect",
"rainbow-glow",
"realistic-cloud",
"realistic-embroidery",
"redhot-metal2",
"redhot-metal",
"resht-league-of-kings",
"road-paint",
"romantic-valentine",
"rooster",
"round-thunder",
"sandsummer-beach2",
"sandsummer-beach",
"signature",
"skin-python-text-effect",
"skull-videomaker",
"snake-text",
"snow-text",
"stars-night",
"status-life2",
"status-life3",
"status-life",
"status-love2",
"status-love",
"status-mood2",
"status-mood3",
"status-mood4",
"status-mood",
"storm-trooper",
"summerysand",
"sunflower-birthdaycake",
"sunlight-shadow",
"tattoo-body2",
"tattoo-body",
"tattoo-girl",
"tattoo-hand2",
"text-christmas",
"text-effectcolor",
"text-leaves",
"text-party",
"text-rain",
"text-wall",
"tiger",
"traveling-bear",
"typography-leaves",
"typography-leavesautumn",
"typography-maker2",
"typography-maker3",
"typography-maker",
"underwater-text",
"valentine-day",
"video-greeting-cards",
"violet-league-of-kings",
"wallpaper-moblie",
"water-3d",
"water-effect2",
"water-effect",
"watercolor-effect",
"wedding-silver",
"wet-glass",
"wings-effect",
"women-day",
"yasuo",
"yellowskin-snake",
"yena-arena-of-valor"]

let ephotox2 = ["3d-wood2",
"3dgalaxy-metal",
"3dgold",
"3drose-gold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage-light-bulb",
"avengers",
"balloon-text",
"balloons-cards",
"balloons-love",
"bear",
"blueglass-effect",
"buffalo",
"bull",
"captain-america",
"chicken",
"cutegirl-graffiti",
"cyanglass-effect",
"dragon",
"eagle",
"floral-ornamental",
"football-club",
"graffiti-text6",
"greenglass-effect",
"griffin",
"gun",
"heated-steel",
"hornet",
"horse",
"jaguar",
"juventus",
"life-buoys",
"lion2",
"lion",
"marvel",
"messi",
"metal-marvel",
"metal-molding",
"monkey",
"ninja-black&white",
"orangeglass-effect",
"phoenix",
"pinkglass-effect",
"pornhub",
"premier-leaguecup",
"pubg-black&white",
"purpleglass-effect",
"real-madrid",
"redglass-effect",
"rhino",
"sabertooth",
"shark",
"spider-man",
"tattoo-hand",
"text-logo",
"tiger-logo",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy",
"wolf-logo",
"wolver",
"yellowglass-effect"]

let oxy = ["burnpaper",
"butterfly",
"coffecup",
"coffee",
"doubleheart",
"flaming",
"grass",
"gravity",
"lovemessage",
"lovetext",
"naruto",
"oceansea",
"quotewood",
"rainbow",
"romantic",
"shadow",
"smoke"]

let oxy2 = ["pubg",
"slidetext",
"glitch"]

let oxyx = ["3dglowing",
"3dnature",
"3dwoodenblack",
"bevel",
"birthdaycake",
"burnpaper",
"butterfly",
"camuflage",
"candy",
"coffee-heartcup",
"coffee",
"crispchrome",
"embroiderytext",
"flaming",
"flowertext",
"flowertypo",
"funnycup",
"fur",
"gerbang",
"glowrainbow",
"gradientavatar",
"graffititext",
"grenleaves",
"harrypotter",
"illuminated-metallic",
"lovemessage",
"luxuryroyal",
"metalicglow",
"modernmetal",
"multimaterial",
"nature3d",
"neonlight",
"orchids-flower",
"partyneon",
"quotesgrass",
"rainbowbg",
"rainbowshine",
"romance",
"romantic-doubleheart",
"silk",
"smoketype-effect",
"smoketypography",
"stars",
"striking3d",
"summertext",
"sweetcandy",
"typography",
"underquotes",
"underwaterocean",
"underwebmatrix",
"vintage",
"watermelon",
"whitecube",
"wolfmetal",
"woodblock",
"woodenboard",
"woodheart",
"yellowroses"]

let oxyx2 = ["tiktokmaker",
"8bit"]

let pfunia = ["balloon",
"beach-sign",
"blood_writing",
"bracelet",
"cemetery-gates",
"chalk_writing",
"christmas-writing",
"cookies_writing",
"denim-emdroidery",
"einstein",
"foggy_window_writing",
"fortune-cookie",
"frosty-window-writing",
"haunted-hotel",
"heart_tattoo",
"light-graffiti",
"lipstick-writing",
"love-lock",
"nightmare-writing",
"noir",
"pendant",
"plane-banner",
"sand_writing",
"snow-sign",
"soup_letters",
"street-sign",
"typewriter",
"water-writing",
"wooden_sign",
"yacht"]

let pfunia2 = ["neon",
"lifebuoy",
"arrow-signs",
"snow_writing",
"cinema-ticket",
"birthday-cake",
"movie_marquee"]

let textpro = ["bear",
"berry",
"blackpink",
"blood",
"broken",
"carbon",
"christmas",
"circuit",
"devil",
"discovery",
"dropwater",
"embossed",
"fiction",
"firework",
"glossy",
"glue",
"gradient",
"greenhorror",
"harrypotter",
"imglitch",
"light",
"magma",
"metallic",
"neon",
"paper",
"skeleton",
"sketch",
"stone",
"transformer",
"videogame"]

let textpro2 = ["pornhub",
"choror",
"spooky",
"layered",
"aglitch",
"captainamerica"]

let textprox = ["3d-effect",
"3d-rubystone",
"3d-text-sub-zombie",
"3dengraved",
"3dgolden",
"3dgradient",
"3dlove",
"3dluxury",
"3dneonlight",
"3dpapercut",
"3drainbow",
"3drealistic",
"3dscifi",
"3dtext-effect",
"3dunderwater",
"3dwaterpipe",
"1917-style",
"alice-league-of-kings",
"angel-wing-galaxy",
"anubis",
"arch-crossfire",
"art-shader",
"assassins-creed",
"azzenka-league-of-kings",
"bearlogo",
"bg-crossfire",
"birthday-cake",
"birthday-cards",
"birthday-greeting",
"birthday-roses",
"black-metal",
"blackpink",
"blood-frosted",
"blood-text",
"blue-effect",
"blue-glitter",
"brickwall",
"brokentext",
"bubble-effect",
"bulb-effect",
"circuit",
"color-fireworks",
"cool-metal",
"dark-gold-metal",
"decorated-cookie",
"deluxe-gold",
"deluxe-silver",
"dinamo",
"double-exposure",
"dragon-fire",
"eroded-metal",
"fabric-text",
"firework",
"fox-crossfire",
"fun-certify1",
"fun-certify2",
"futuristic",
"galaxy-angel",
"galaxy-effect",
"galaxy-effect2",
"galaxy-text",
"galaxy-text-3",
"gankk-league-of-kings",
"gemstone",
"genji-overwatch",
"glossy",
"glossy-bluemetal",
"glossy-carbon",
"glossy-chrome",
"gold-avenger",
"gold-barcar",
"gold-batman",
"gold-bird2",
"gold-eagle",
"gold-effect",
"gold-fox",
"gold-glitter",
"gold-lion",
"gold-lion2",
"gold-star",
"gold-tiger",
"golden-letter",
"gr-crossfire",
"graffiti-color",
"graffiti-text3",
"graffiti-text4",
"graffiti-text5",
"graffiti-text8",
"graffititext",
"green-brush",
"greenhorror",
"halloween-fire",
"hanzo-overwatch",
"heart-birthday",
"heart-cups",
"heart-flashlight",
"hero3-crossfire",
"holographic",
"ledtext",
"lend-text",
"light-text",
"logo-galaxy",
"lol-ahri",
"lol-caitlyn",
"lol-draven",
"lol-ezreal-and-shen",
"lol-fiora",
"lol-fizz",
"lol-garen",
"lol-graves",
"lol-jhin",
"lol-jinx",
"lol-kalista",
"lol-khazix",
"lol-kogmaw",
"lol-leesin",
"lol-lux",
"lol-master-yi",
"lol-miss-fortune",
"lol-nidalee",
"lol-quinn",
"lol-rengar",
"lol-riven",
"lol-sona",
"lol-talon",
"lol-thresh",
"lol-vayne",
"lol-wukong",
"lol-yasuo",
"lol-zed",
"machines-effect",
"magic-text",
"magmatext",
"matrix-text",
"mei-overwatch",
"mercy-overwatch",
"metal-avenger",
"metal-headshot",
"metal-lion-2",
"metal-real-madrid",
"metal-star",
"metal-superman",
"metal-text-effect",
"metal-wolf-2",
"metalic",
"metallic-letter",
"mganga-league-of-kings",
"miniontext",
"modern-gold-3",
"modern-gold-4",
"modern-gold-5-pro",
"modern-gold-green",
"modern-gold-purple",
"modern-gold-red",
"modern-gold-sliver",
"modern-goldred",
"name-on-hot-air-ballon",
"neon",
"neon-2",
"neon-brightblue",
"neon-effects",
"neon-light-galaxy",
"neon-satin",
"neondevil",
"neonlight",
"neontext-light",
"paper-cut",
"paperart",
"rainbow-effect",
"reaper-overwatch",
"red-birthdaycake",
"redhot-metal",
"resht-league-of-kings",
"science",
"sfg-crossfire",
"skeleton",
"sketch",
"snowtext",
"soldier-overwatch",
"status-life",
"status-life-1",
"status-life-2",
"status-love",
"status-mood",
"status-mood-1",
"status-mood-2",
"status-mood-3",
"sunlight-shadow",
"swat-crossfire",
"tattoo-dragon",
"text-birthdaycake",
"text-birthdaycake2",
"thundertext",
"torbjornplate-overwatch",
"transformer",
"typography-autumn",
"typography-leaves",
"typography-maker1",
"violet-league-of-kings",
"water-3d",
"water-effect",
"watercolor",
"wedding-silver",
"wetglass",
"wings-effect",
"wishes-birthdaycake",
"word-greenfireworks",
"word-leaves"]

let textprox2= ["3dgalaxy-metal",
"3dgold",
"3drosegold",
"3dsilver",
"3dspace",
"3dstone",
"3dvintage",
"avengers",
"balloons-cards",
"balloons-love",
"classic8bit",
"cutegirl",
"floraltext",
"glitchtext",
"gradientlogo",
"horrortext",
"juventus",
"layeredtext",
"lion-mascot",
"marvel",
"metal-marvel",
"metal-molding",
"ninja-black&white",
"phtext",
"spider-man",
"thortext",
"tiktok",
"typography-greenleaf",
"wolf-black&white",
"wolf-galaxy"]

    let urut = text.split`|`
    let one = urut[0]
    let two = urut[1]
    let three = urut[2]

    if (command == "epho") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(epho)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/ephoto/" + one + "?text=" + two + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "epho2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(epho2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/ephoto/" + one + "?text1=" + two + "&text2=" + three + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "ephotox") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(ephotox)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/ephoto360/" + one + "?apikey=beta&text=" + two, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "ephotox2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(ephotox2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/ephoto360/" + one + "?apikey=beta&text=" + two + "&text2=" + three, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "oxy") {
    if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(oxy)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/photooxy/" + one + "?text=" + two + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "oxy2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(oxy2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/photooxy/" + one + "?text1=" + two + "&text2=" + three + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "oxyx") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(oxyx)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/photooxy/" + one + "?apikey=beta&text=" + two, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "oxyx2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(oxyx2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/photooxy/" + one + "?apikey=beta&text=" + two + "&text2=" + three, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "pfunia") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(pfunia)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/photofunia/" + one + "?apikey=beta&text=" + two, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "pfunia2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(pfunia2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/photofunia/" + one + "?apikey=beta&text=" + two + "&text2=" + three, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "textpro") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(textpro)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/textpro/" + one + "?text=" + two + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "textpro2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(textpro2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://wudysoft.up.railway.app/api/textpro/" + one + "?text1=" + two + "&text2=" + three + "&apikey=Lann", [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "textprox") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(textprox)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/textpro/" + one + "?apikey=beta&text=" + two, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

    if (command == "textprox2") {
        if ((!one || !two)) throw "*Example:*\n" + usedPrefix + command + " burnpaper|MyLogo \n*List:*\n" + await ArrClean(textprox2)
        try {
        m.reply(wait)
        let caption = "*Result From:*\n" + two
        await conn.sendButton(m.chat, caption, wm, "https://violetics.pw/api/textpro/" + one + "?apikey=beta&text=" + two + "&text2=" + three, [
            ["Menu", usedPrefix + "menu"]
        ], m, adReplyS)
        } catch (e) {
        throw eror
        }
    }

}
handler.command = ["epho",
    "epho2",
    "ephotox",
    "ephotox2",
    "oxy",
    "oxy2",
    "oxyx",
    "oxyx2",
    "pfunia",
    "pfunia2",
    "textpro",
    "textpro2",
    "textprox",
    "textprox2"
]
export default handler

function ArrClean(str) {
return str.map((v, index) => ++index + ". " + v).join('\r\n')
}