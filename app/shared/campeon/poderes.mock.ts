export const PODERES : any = {
    "tree": [
        {
            "header": "START",
            "tags": [
                "LANE",
                "JUNGLE"
            ]
        },
        {
            "header": "TOOLS",
            "tags": [
                "GOLDPER",
                "CONSUMABLE",
                "VISION"
            ]
        },
        {
            "header": "DEFENSE",
            "tags": [
                "HEALTH",
                "HEALTHREGEN",
                "ARMOR",
                "SPELLBLOCK"
            ]
        },
        {
            "header": "ATTACK",
            "tags": [
                "LIFESTEAL",
                "CRITICALSTRIKE",
                "ATTACKSPEED",
                "DAMAGE"
            ]
        },
        {
            "header": "MAGIC",
            "tags": [
                "MANA",
                "SPELLDAMAGE",
                "COOLDOWNREDUCTION",
                "MANAREGEN"
            ]
        },
        {
            "header": "MOVEMENT",
            "tags": [
                "BOOTS",
                "NONBOOTSMOVEMENT"
            ]
        },
        {
            "header": "UNCATEGORIZED",
            "tags": [
                "ACTIVE",
                "SPELLVAMP",
                "MAGICPENETRATION",
                "ARMORPENETRATION",
                "AURA",
                "ONHIT",
                "TRINKET",
                "SLOW",
                "STEALTH",
                "TENACITY"
            ]
        }
    ],
    "version": "7.13.1",
    "data": {
        "1001": {
            "stats": {
                "FlatMovementSpeedMod": 25
            },
            "description": "<groupLimit>Limitado a 1.</groupLimit><br><br><unique>Pasiva ÚNICA, Movimiento mejorado: </unique>+25 de velocidad de movimiento",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Aumenta levemente la velocidad de movimiento.",
            "image": {
                "full": "1001.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "Limitado a 1. Pasiva ÚNICA, Movimiento mejorado: +25 de velocidad de movimiento",
            "colloq": "Boots of Speed",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3006",
                "3047",
                "3020",
                "3158",
                "3111",
                "3117",
                "3009"
            ],
            "id": 1001,
            "name": "Botas de velocidad"
        },
        "1004": {
            "stats": {},
            "description": "<stats><mana>+25% regeneración de maná básica </mana></stats>",
            "gold": {
                "total": 125,
                "sell": 88,
                "base": 125,
                "purchasable": true
            },
            "tags": [
                "ManaRegen"
            ],
            "plaintext": "Aumenta levemente la regeneración de maná.",
            "image": {
                "full": "1004.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "+25% regeneración de maná básica",
            "colloq": "Faerie Charm",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3028",
                "3070",
                "3073",
                "3114",
                "3098"
            ],
            "id": 1004,
            "name": "Amuleto de las hadas"
        },
        "1006": {
            "stats": {},
            "description": "<stats>+50% regeneración de vida básica </stats>",
            "gold": {
                "total": 150,
                "sell": 105,
                "base": 150,
                "purchasable": true
            },
            "tags": [
                "HealthRegen"
            ],
            "plaintext": "Aumenta levemente la regeneración de vida.",
            "image": {
                "full": "1006.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "+50% regeneración de vida básica",
            "colloq": "Rejuvenation Bead",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3077",
                "3097",
                "2053",
                "3801",
                "3096",
                "3194"
            ],
            "id": 1006,
            "name": "Perla de rejuvenecimiento"
        },
        "1011": {
            "from": [
                "1028"
            ],
            "description": "<stats>+380 vida</stats>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Aumenta en gran medida la vida.",
            "image": {
                "full": "1011.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+380 vida",
            "colloq": "Giant's Belt",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3083",
                "3084",
                "3022",
                "3742"
            ],
            "stats": {
                "FlatHPPoolMod": 380
            },
            "id": 1011,
            "name": "Cinturón de gigante"
        },
        "1018": {
            "stats": {
                "FlatCritChanceMod": 0.2
            },
            "description": "<stats>+20% probabilidad de impacto crítico</stats>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike"
            ],
            "plaintext": "Aumenta levemente la probabilidad de crítico.",
            "image": {
                "full": "1018.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+20% probabilidad de impacto crítico",
            "colloq": "Cloak of Agility",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3031",
                "3185",
                "3508"
            ],
            "id": 1018,
            "name": "Capa de agilidad"
        },
        "1026": {
            "stats": {
                "FlatMagicDamageMod": 40
            },
            "description": "<stats>+40 poder de habilidad</stats>",
            "gold": {
                "total": 850,
                "sell": 595,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Aumenta moderadamente el poder de habilidad.",
            "image": {
                "full": "1026.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+40 poder de habilidad",
            "colloq": "Blasting Wand",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3089",
                "3135",
                "3124",
                "3029",
                "3151",
                "3027",
                "3100",
                "3102",
                "3116"
            ],
            "id": 1026,
            "name": "Vara explosiva"
        },
        "1027": {
            "stats": {
                "FlatMPPoolMod": 250
            },
            "description": "<stats><mana>+250 maná</mana></stats>",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Mana"
            ],
            "plaintext": "Aumenta el maná.",
            "image": {
                "full": "1027.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "+250 maná",
            "colloq": "azul",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3057",
                "3070",
                "3010",
                "3024",
                "3073",
                "3802"
            ],
            "id": 1027,
            "name": "Cristal de zafiro"
        },
        "1028": {
            "stats": {
                "FlatHPPoolMod": 150
            },
            "description": "<stats>+150 vida</stats>",
            "gold": {
                "total": 400,
                "sell": 280,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Aumenta la vida.",
            "image": {
                "full": "1028.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "+150 vida",
            "colloq": "rojo",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "1011",
                "3211",
                "3136",
                "2045",
                "2049",
                "3010",
                "3801",
                "3044",
                "3052",
                "3067",
                "3068",
                "3116",
                "3143",
                "3748",
                "3751"
            ],
            "id": 1028,
            "name": "Cristal de rubí"
        },
        "1029": {
            "stats": {
                "FlatArmorMod": 15
            },
            "description": "<stats>+15 armadura</stats>",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Aumenta levemente la armadura.",
            "image": {
                "full": "1029.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "+15 armadura",
            "colloq": "Cloth Armor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3047",
                "1031",
                "3191",
                "3024",
                "3082",
                "3075",
                "2053",
                "3105",
                "3026"
            ],
            "id": 1029,
            "name": "Armadura de tela"
        },
        "1031": {
            "from": [
                "1029"
            ],
            "description": "<stats>+40 armadura</stats>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Aumenta en gran medida la armadura.",
            "image": {
                "full": "1031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "+40 armadura",
            "colloq": "Chain Vest",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3075",
                "3068",
                "3109",
                "3193",
                "3742"
            ],
            "stats": {
                "FlatArmorMod": 40
            },
            "id": 1031,
            "name": "Chaleco de cadenas"
        },
        "1033": {
            "stats": {
                "FlatSpellBlockMod": 25
            },
            "description": "<stats>+25 resistencia mágica</stats>",
            "gold": {
                "total": 450,
                "sell": 315,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "SpellBlock"
            ],
            "plaintext": "Aumenta levemente la resistencia mágica.",
            "image": {
                "full": "1033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "sanitizedDescription": "+25 resistencia mágica",
            "colloq": "Null-Magic Mantle",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3111",
                "3211",
                "1057",
                "3028",
                "3140",
                "3155",
                "3105",
                "3102",
                "3814",
                "3190",
                "3194"
            ],
            "id": 1033,
            "name": "Manto de anulación de magia"
        },
        "1036": {
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "description": "<stats>+10 daño de ataque</stats>",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Lane"
            ],
            "plaintext": "Aumenta levemente el daño de ataque.",
            "image": {
                "full": "1036.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "+10 daño de ataque",
            "colloq": "Long Sword",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3134",
                "3077",
                "3123",
                "1053",
                "3133",
                "3034",
                "3035",
                "3044",
                "3052",
                "3053",
                "3072",
                "3122",
                "3144",
                "3155",
                "3252"
            ],
            "id": 1036,
            "name": "Espada larga"
        },
        "1037": {
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 daño de ataque</stats>",
            "gold": {
                "total": 875,
                "sell": 613,
                "base": 875,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Aumenta moderadamente el daño de ataque.",
            "image": {
                "full": "1037.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "+25 daño de ataque",
            "colloq": "Pickaxe",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3124",
                "3004",
                "3008",
                "3031",
                "3074",
                "3814",
                "3812",
                "3139",
                "3181"
            ],
            "id": 1037,
            "name": "Pico"
        },
        "1038": {
            "stats": {
                "FlatPhysicalDamageMod": 40
            },
            "description": "<stats>+40 daño de ataque</stats>",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 1300,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Aumenta en gran medida el daño de ataque.",
            "image": {
                "full": "1038.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "+40 daño de ataque",
            "colloq": "B. F. Sword;bf",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3026",
                "3031",
                "3072",
                "3147",
                "3508"
            ],
            "id": 1038,
            "name": "Espadón"
        },
        "1039": {
            "stats": {},
            "description": "<stats><mana>+150% de regeneración de maná básico en la jungla </mana></stats><br><br><unique>Pasiva ÚNICA, Diente:</unique> Al dañar a un monstruo con un hechizo o un ataque se le roba 25 de vida a lo largo de 5 s. Matar monstruos otorga <font color='#99BBBB'><a href='SpecialJungleExperience'>experiencia adicional especial</a></font>.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Proporciona daño contra monstruos y regeneración de maná en la jungla.",
            "image": {
                "full": "1039.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "+150% de regeneración de maná básico en la jungla Pasiva ÚNICA, Diente: Al dañar a un monstruo con un hechizo o un ataque se le roba 25 de vida a lo largo de 5 s. Matar monstruos otorga experiencia adicional especial.",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "25",
                "Effect2Amount": "0",
                "Effect6Amount": "1.5",
                "Effect4Amount": "5",
                "Effect7Amount": "15",
                "Effect5Amount": "0"
            },
            "colloq": "jungla;Jungla",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3706",
                "3711",
                "3715"
            ],
            "id": 1039,
            "name": "Talismán del cazador"
        },
        "1041": {
            "stats": {},
            "description": "<stats>+10% de robo de vida contra monstruos</stats><br><br><unique>Pasiva ÚNICA, Uña:</unique> Los ataques básicos infligen 25 de daño adicional contra monstruos. Matar monstruos otorga <font color='#99BBBB'><a href='SpecialJungleExperience'>experiencia adicional especial</a></font>.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Proporciona daño y robo de vida contra monstruos.",
            "image": {
                "full": "1041.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "+10% de robo de vida contra monstruos Pasiva ÚNICA, Uña: Los ataques básicos infligen 25 de daño adicional contra monstruos. Matar monstruos otorga experiencia adicional especial.",
            "effect": {
                "Effect3Amount": "0.1",
                "Effect1Amount": "12",
                "Effect2Amount": "25",
                "Effect6Amount": "0.1",
                "Effect4Amount": "2",
                "Effect7Amount": "15",
                "Effect5Amount": "0"
            },
            "colloq": "jungle;Jungle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3706",
                "3711",
                "3715"
            ],
            "id": 1041,
            "name": "Machete del cazador"
        },
        "1042": {
            "stats": {
                "PercentAttackSpeedMod": 0.12
            },
            "description": "<stats>+12% velocidad de ataque</stats>",
            "gold": {
                "total": 300,
                "sell": 210,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed"
            ],
            "plaintext": "Aumenta levemente la velocidad de ataque.",
            "image": {
                "full": "1042.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "+12% velocidad de ataque",
            "colloq": "Dagger",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "1043",
                "3091",
                "3006",
                "3085",
                "2015",
                "3046",
                "3086",
                "3101"
            ],
            "id": 1042,
            "name": "Daga"
        },
        "1043": {
            "from": [
                "1042",
                "1042"
            ],
            "description": "<stats>+25% velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos causan 15 de daño físico adicional al golpear.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "plaintext": "Aumenta en gran medida la velocidad de ataque.",
            "image": {
                "full": "1043.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "+25% velocidad de ataque Pasiva ÚNICA: Los ataques básicos causan 15 de daño físico adicional al golpear.",
            "effect": {
                "Effect1Amount": "15"
            },
            "colloq": "Recurve Bow",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3091",
                "3153",
                "3124",
                "3675",
                "1416",
                "1418",
                "1419"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.25
            },
            "id": 1043,
            "name": "Arco curvo"
        },
        "1051": {
            "stats": {
                "FlatCritChanceMod": 0.1
            },
            "description": "<stats>+10% probabilidad de impacto crítico</stats>",
            "gold": {
                "total": 400,
                "sell": 280,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike"
            ],
            "plaintext": "Aumenta levemente la probabilidad de crítico.",
            "image": {
                "full": "1051.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "+10% probabilidad de impacto crítico",
            "colloq": "Brawler's Gloves",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3086",
                "3122"
            ],
            "id": 1051,
            "name": "Guantes de pelea"
        },
        "1052": {
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "description": "<stats>+20 poder de habilidad</stats>",
            "gold": {
                "total": 435,
                "sell": 305,
                "base": 435,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Aumenta levemente el poder de habilidad.",
            "image": {
                "full": "1052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "+20 poder de habilidad",
            "colloq": "Amplifying Tome;amptome",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3108",
                "3191",
                "3136",
                "3135",
                "3145",
                "3113",
                "3090",
                "3116",
                "1402",
                "1410",
                "1414",
                "3089",
                "3165",
                "3673",
                "3802"
            ],
            "id": 1052,
            "name": "Tomo amplificador"
        },
        "1053": {
            "from": [
                "1036"
            ],
            "description": "<stats>+15 daño de ataque<br>+10% robo de vida</stats>",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Los ataques básicos restauran vida.",
            "image": {
                "full": "1053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "+15 daño de ataque +10% robo de vida",
            "colloq": "Vampiric Sceptre",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3072",
                "3074",
                "3812",
                "3139",
                "3144",
                "3181"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "PercentLifeStealMod": 0.1
            },
            "id": 1053,
            "name": "Cetro vampírico"
        },
        "1054": {
            "stats": {
                "FlatHPPoolMod": 80,
                "FlatHPRegenMod": 1.2
            },
            "description": "<stats>+80 de vida</stats><br><br><passive>Pasiva: </passive>Restaura 6 de vida cada 5 s.<br><passive>Pasiva: </passive>Los ataques básicos infligen 5 de daño físico adicional contra súbditos al golpear.<br><unique>Pasiva ÚNICA:</unique> Recuperas 20 de vida adicional a lo largo de10 s después de recibir daño de un campeón enemigo.",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "plaintext": "Buen objeto defensivo inicial.",
            "image": {
                "full": "1054.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "+80 de vida Pasiva: Restaura 6 de vida cada 5 s. Pasiva: Los ataques básicos infligen 5 de daño físico adicional contra súbditos al golpear. Pasiva ÚNICA: Recuperas 20 de vida adicional a lo largo de10 s después de recibir daño de un campeón enemigo.",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "10",
                "Effect3Amount": "5",
                "Effect4Amount": "2"
            },
            "colloq": "dshield",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1054,
            "name": "Escudo de Doran"
        },
        "1055": {
            "stats": {
                "FlatPhysicalDamageMod": 8,
                "FlatHPPoolMod": 80,
                "PercentLifeStealMod": 0.03
            },
            "description": "<stats>+8 daño de ataque<br>+80 vida<br>+3% robo de vida</stats>",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "Lane",
                "LifeSteal"
            ],
            "plaintext": "Buen objeto inicial para atacantes.",
            "image": {
                "full": "1055.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "sanitizedDescription": "+8 daño de ataque +80 vida +3% robo de vida",
            "effect": {
                "Effect1Amount": "10"
            },
            "colloq": "dblade",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1055,
            "name": "Espada de Doran"
        },
        "1056": {
            "stats": {
                "FlatHPPoolMod": 60,
                "FlatMagicDamageMod": 15
            },
            "description": "<stats>+60 de vida<br>+15 de poder de habilidad<br><mana>+50% de regeneración de maná básica </mana></stats><br><br><mana><passive>Pasiva ÚNICA:</passive> Restaura 4 de maná al asesinar a una unidad.</mana>",
            "gold": {
                "total": 400,
                "sell": 160,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Buen objeto inicial para hechiceros.",
            "image": {
                "full": "1056.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "+60 de vida +15 de poder de habilidad +50% de regeneración de maná básica Pasiva ÚNICA: Restaura 4 de maná al asesinar a una unidad.",
            "effect": {
                "Effect1Amount": "4"
            },
            "colloq": "dring",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1056,
            "name": "Anillo de Doran"
        },
        "1057": {
            "from": [
                "1033"
            ],
            "description": "<stats>+40 resistencia mágica</stats>",
            "gold": {
                "total": 720,
                "sell": 504,
                "base": 270,
                "purchasable": true
            },
            "tags": [
                "SpellBlock"
            ],
            "plaintext": "Aumenta moderadamente la resistencia mágica.",
            "image": {
                "full": "1057.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+40 resistencia mágica",
            "colloq": "Negatron Cloak",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3170",
                "3091",
                "3512",
                "3001",
                "3193"
            ],
            "stats": {
                "FlatSpellBlockMod": 40
            },
            "id": 1057,
            "name": "Capa negatrón"
        },
        "1058": {
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "description": "<stats>+60 poder de habilidad</stats>",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Aumenta en gran medida el poder de habilidad.",
            "image": {
                "full": "1058.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+60 poder de habilidad",
            "colloq": "nlr",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3089",
                "3090",
                "3003",
                "3007",
                "3285"
            ],
            "id": 1058,
            "name": "Vara innecesariamente grande"
        },
        "1082": {
            "stats": {
                "FlatMPPoolMod": 100,
                "FlatMagicDamageMod": 15
            },
            "description": "<stats>+15 de poder de habilidad<br>+25% de curación adicional con pociones<br><mana>+100 de maná</mana></stats><br><br><unique>Pasiva ÚNICA - Pavor:</unique> Otorga +3 de poder de habilidad por acumulación de Gloria.  <br><unique>Pasiva ÚNICA - Todo o nada:</unique> Otorga 2 de Gloria por matar a un campeón o 1 de Gloria por ayudar, hasta un total de 10 de Gloria. Al morir se pierde 4 de Gloria.",
            "gold": {
                "total": 350,
                "sell": 245,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "Lane"
            ],
            "plaintext": "Proporciona poder de habilidad y maná. Aumenta su poder a medida que matas enemigos.",
            "image": {
                "full": "1082.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+15 de poder de habilidad +25% de curación adicional con pociones +100 de maná Pasiva ÚNICA - Pavor: Otorga +3 de poder de habilidad por acumulación de Gloria. Pasiva ÚNICA - Todo o nada: Otorga 2 de Gloria por matar a un campeón o 1 de Gloria por ayudar, hasta un total de 10 de Gloria. Al morir se pierde 4 de Gloria.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "0.25",
                "Effect2Amount": "2",
                "Effect6Amount": "4",
                "Effect4Amount": "10",
                "Effect5Amount": "3"
            },
            "colloq": "Noxian",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "into": [
                "3041"
            ],
            "id": 1082,
            "name": "El sello oscuro"
        },
        "1083": {
            "stats": {
                "FlatPhysicalDamageMod": 7
            },
            "description": "<stats>+7 daño de ataque<br>+3 vida al golpear</stats><br><br><unique>Pasiva ÚNICA:</unique> Matar a un súbdito de calle otorga 1 de oro adicional. Matar a 100 súbditos de calle otorga además 350 de oro adicional al momento y desactiva esta pasiva.",
            "gold": {
                "total": 450,
                "sell": 180,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "plaintext": "Proporciona daño y robo de vida al golpear. Matar súbditos otorga oro adicional.",
            "image": {
                "full": "1083.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+7 daño de ataque +3 vida al golpear Pasiva ÚNICA: Matar a un súbdito de calle otorga 1 de oro adicional. Matar a 100 súbditos de calle otorga además 350 de oro adicional al momento y desactiva esta pasiva.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "1",
                "Effect3Amount": "100",
                "Effect4Amount": "350"
            },
            "colloq": "dblade",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 1083,
            "name": "Preferencia"
        },
        "1400": {
            "from": [
                "3133",
                "3706"
            ],
            "description": "<stats>+60 daño de ataque<br>+10% reducción de enfriamiento</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga daño de ataque y reducción de enfriamiento",
            "image": {
                "full": "1400.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "+60 daño de ataque +10% reducción de enfriamiento",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1400,
            "name": "Encantamiento: Guerrero"
        },
        "1401": {
            "from": [
                "3751",
                "3706"
            ],
            "description": "<stats>+325 de vida<br>+20% de vida adicional</stats><br><br><unique>Pasiva ÚNICA - Inmolar:</unique> En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos. ",
            "gold": {
                "total": 2425,
                "sell": 1698,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga vida y Aura de Inmolar.",
            "image": {
                "full": "1401.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "+325 de vida +20% de vida adicional Pasiva ÚNICA - Inmolar: En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 325
            },
            "id": 1401,
            "name": "Encantamiento: Mole de ceniza"
        },
        "1402": {
            "from": [
                "3113",
                "1052",
                "3706"
            ],
            "description": "<stats>+60 poder de habilidad<br>+7% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Eco:</unique> Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.<br><br>Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Otorga poder de habilidad y potencia tus hechizos de forma periódica.",
            "image": {
                "full": "1402.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "+60 poder de habilidad +7% velocidad de movimiento Pasiva ÚNICA, Eco: Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos. Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1402,
            "name": "Encantamiento: Ecos rúnicos"
        },
        "1408": {
            "from": [
                "3133",
                "3711"
            ],
            "description": "<stats>+60 daño de ataque<br>+10% reducción de enfriamiento</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga daño de ataque y reducción de enfriamiento",
            "image": {
                "full": "1408.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "+60 daño de ataque +10% reducción de enfriamiento",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1408,
            "name": "Encantamiento: Guerrero"
        },
        "1409": {
            "from": [
                "3751",
                "3711"
            ],
            "description": "<stats>+325 de vida<br>+20% de vida adicional</stats><br><br><unique>Pasiva ÚNICA - Inmolar:</unique> En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos. ",
            "gold": {
                "total": 2425,
                "sell": 1698,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga vida y Aura de Inmolar.",
            "image": {
                "full": "1409.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "+325 de vida +20% de vida adicional Pasiva ÚNICA - Inmolar: En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 325
            },
            "id": 1409,
            "name": "Encantamiento: Mole de ceniza"
        },
        "1410": {
            "from": [
                "3113",
                "1052",
                "3711"
            ],
            "description": "<stats>+60 poder de habilidad<br>+7% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Eco:</unique> Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.<br><br>Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Otorga poder de habilidad y potencia tus hechizos de forma periódica.",
            "image": {
                "full": "1410.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "+60 poder de habilidad +7% velocidad de movimiento Pasiva ÚNICA, Eco: Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos. Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1410,
            "name": "Encantamiento: Ecos rúnicos"
        },
        "1412": {
            "from": [
                "3133",
                "3715"
            ],
            "description": "<stats>+60 daño de ataque<br>+10% reducción de enfriamiento</stats>",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga daño de ataque y reducción de enfriamiento",
            "image": {
                "full": "1412.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "+60 daño de ataque +10% reducción de enfriamiento",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 1412,
            "name": "Encantamiento: Guerrero"
        },
        "1413": {
            "from": [
                "3751",
                "3715"
            ],
            "description": "<stats>+325 de vida<br>+20% de vida adicional</stats><br><br><unique>Pasiva ÚNICA - Inmolar:</unique> En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos. ",
            "gold": {
                "total": 2425,
                "sell": 1698,
                "base": 525,
                "purchasable": true
            },
            "plaintext": "Otorga vida y Aura de Inmolar.",
            "image": {
                "full": "1413.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "+325 de vida +20% de vida adicional Pasiva ÚNICA - Inmolar: En combate, inflige 11 (+1 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 325
            },
            "id": 1413,
            "name": "Encantamiento: Mole de ceniza"
        },
        "1414": {
            "from": [
                "3113",
                "1052",
                "3715"
            ],
            "description": "<stats>+60 poder de habilidad<br>+7% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Eco:</unique> Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.<br><br>Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 340,
                "purchasable": true
            },
            "plaintext": "Otorga poder de habilidad y potencia tus hechizos de forma periódica.",
            "image": {
                "full": "1414.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "+60 poder de habilidad +7% velocidad de movimiento Pasiva ÚNICA, Eco: Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos. Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 15% del maná que te falte.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 1414,
            "name": "Encantamiento: Ecos rúnicos"
        },
        "1416": {
            "from": [
                "1043",
                "3706"
            ],
            "description": "<stats>+50% de velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Aumenta la velocidad de ataque e inflige daño en función de la vida del objetivo.",
            "image": {
                "full": "1416.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "+50% de velocidad de ataque Pasiva ÚNICA: Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1416,
            "name": "Encantamiento: Navaja de sangre"
        },
        "1418": {
            "from": [
                "1043",
                "3711"
            ],
            "description": "<stats>+50% de velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Aumenta la velocidad de ataque e inflige daño en función de la vida del objetivo.",
            "image": {
                "full": "1418.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "+50% de velocidad de ataque Pasiva ÚNICA: Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1418,
            "name": "Encantamiento: Navaja de sangre"
        },
        "1419": {
            "from": [
                "1043",
                "3715"
            ],
            "description": "<stats>+50% de velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "gold": {
                "total": 2625,
                "sell": 1838,
                "base": 625,
                "purchasable": true
            },
            "plaintext": "Aumenta la velocidad de ataque e inflige daño en función de la vida del objetivo.",
            "image": {
                "full": "1419.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "+50% de velocidad de ataque Pasiva ÚNICA: Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 1419,
            "name": "Encantamiento: Navaja de sangre"
        },
        "2003": {
            "stats": {},
            "description": "<groupLimit>Limitado a 5 a la vez. Limitado a 1 tipo de poción de curación.</groupLimit><br><br><consumable>Pulsar para utilizar.</consumable> Restaura 150 de vida a lo largo de 15 s.",
            "gold": {
                "total": 50,
                "sell": 20,
                "base": 50,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Jungle",
                "Lane"
            ],
            "plaintext": "Al usarse restaura vida a lo largo del tiempo.",
            "image": {
                "full": "2003.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "Limitado a 5 a la vez. Limitado a 1 tipo de poción de curación. Pulsar para utilizar. Restaura 150 de vida a lo largo de 15 s.",
            "effect": {
                "Effect1Amount": "150",
                "Effect2Amount": "15"
            },
            "stacks": 5,
            "colloq": "Health Potion",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2003,
            "name": "Poción de vida"
        },
        "2009": {
            "stats": {},
            "description": "<consumable>Pulsar para utilizar.</consumable> Restaura 80 de vida y 50 de maná a lo largo de 10 s.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2009.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "Pulsar para utilizar. Restaura 80 de vida y 50 de maná a lo largo de 10 s.",
            "inStore": false,
            "consumed": true,
            "id": 2009,
            "name": "Galleta de rejuvenecimiento"
        },
        "2010": {
            "stats": {},
            "description": "<consumable>Pulsar para utilizar.</consumable> Restaura 15 de vida y 15 de maná inmediatamente, y luego 150 de vida a lo largo de 15 s.",
            "gold": {
                "total": 50,
                "sell": 20,
                "base": 50,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2010.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "Pulsar para utilizar. Restaura 15 de vida y 15 de maná inmediatamente, y luego 150 de vida a lo largo de 15 s.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect3Amount": "150",
                "Effect4Amount": "15"
            },
            "stacks": 5,
            "consumed": true,
            "inStore": false,
            "id": 2010,
            "name": "Galleta de rejuvenecimiento"
        },
        "2011": {
            "stats": {},
            "description": "<consumable>Pulsar para utilizar:</consumable> Otorga <font color='#29E3D6'>+1 punto de habilidad</font>.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Consumable",
                "Lane",
                "Jungle"
            ],
            "image": {
                "full": "2011.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "Pulsar para utilizar: Otorga +1 punto de habilidad.",
            "stacks": 5,
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "inStore": false,
            "id": 2011,
            "name": "Elixir de habilidad"
        },
        "2015": {
            "from": [
                "1042"
            ],
            "description": "<stats>+15% velocidad de ataque</stats><br><br><passive>Pasiva:</passive> Al moverte y atacar, podrás lanzar un ataque con <a href='Energized'>Vigor</a>.<br><br><unique>Pasiva ÚNICA, Ataque con Vigor:</unique> Tus ataques con Vigor infligen 50 de daño mágico adicional al golpear.",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit"
            ],
            "plaintext": "Velocidad de ataque y un golpe mágico que se puede cargar.",
            "image": {
                "full": "2015.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+15% velocidad de ataque Pasiva: Al moverte y atacar, podrás lanzar un ataque con Vigor. Pasiva ÚNICA, Ataque con Vigor: Tus ataques con Vigor infligen 50 de daño mágico adicional al golpear.",
            "effect": {
                "Effect1Amount": "50"
            },
            "colloq": "Long Sword",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3094",
                "3087"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.15
            },
            "id": 2015,
            "name": "Fragmento de Kircheis"
        },
        "2031": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 tipo de poción de curación.</groupLimit><br><br><active>Activa ÚNICA:</active> Consume una carga para restaurar 125 de vida a lo largo de 12 s. Acumula un máximo de 2 cargas y se rellena al visitar la tienda.",
            "gold": {
                "total": 150,
                "sell": 60,
                "base": 150,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Consumable",
                "Active",
                "Lane",
                "Jungle"
            ],
            "plaintext": "Restaura vida a lo largo del tiempo y se rellena en la tienda.",
            "image": {
                "full": "2031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "Limitado a 1 tipo de poción de curación. Activa ÚNICA: Consume una carga para restaurar 125 de vida a lo largo de 12 s. Acumula un máximo de 2 cargas y se rellena al visitar la tienda.",
            "effect": {
                "Effect1Amount": "125",
                "Effect2Amount": "0",
                "Effect3Amount": "12",
                "Effect4Amount": "2"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "2032",
                "2033"
            ],
            "id": 2031,
            "name": "Poción reutilizable"
        },
        "2032": {
            "from": [
                "2031"
            ],
            "description": "<groupLimit>Limitado a 1 tipo de poción de curación.</groupLimit><br><br><active>Activa ÚNICA:</active> Consume una carga para restaurar 60 de vida y 35 de maná a lo largo de 8 s. Acumula un máximo de 5 cargas y se rellena al visitar la tienda.<br><br>Matar a un monstruo gigante otorga 1 carga.<br><br><rules>(Al matar a un monstruo gigante con todas las cargas, automáticamente se consume la más reciente).</rules>",
            "gold": {
                "total": 400,
                "sell": 160,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "Consumable",
                "Active",
                "Jungle"
            ],
            "plaintext": "Restaura vida y maná a lo largo del tiempo, se rellena en la tienda y tiene mayor capacidad.",
            "image": {
                "full": "2032.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "Limitado a 1 tipo de poción de curación. Activa ÚNICA: Consume una carga para restaurar 60 de vida y 35 de maná a lo largo de 8 s. Acumula un máximo de 5 cargas y se rellena al visitar la tienda. Matar a un monstruo gigante otorga 1 carga. (Al matar a un monstruo gigante con todas las cargas, automáticamente se consume la más reciente).",
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "35",
                "Effect3Amount": "8",
                "Effect4Amount": "5"
            },
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {},
            "id": 2032,
            "name": "Poción del cazador"
        },
        "2033": {
            "from": [
                "2031"
            ],
            "description": "<groupLimit>Limitado a un tipo de poción de curación.</groupLimit><br><br><active>Activa ÚNICA:</active> Consume una carga para recuperar 125 de vida y 75 de maná durante 12 s. Otorga <font color='#FF8811'><u>Toque de corrupción</u></font> durante ese tiempo. Contiene un máximo de 3 cargas y se rellena al visitar la tienda.<br><br><font color='#FF8811'><u>Toque de corrupción:</u></font> Los hechizos y ataques de daño queman a los campeones enemigos e infligen <scaleLevel>15-30</scaleLevel> de daño mágico durante 3 s (la mitad de daño en el caso de hechizos de efecto en área o de daño prolongado. El daño aumenta según el nivel del campeón).<br><br><rules>(Poción de corrupción se puede usar incluso con la vida y el maná completos).</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Consumable",
                "HealthRegen",
                "Lane",
                "ManaRegen"
            ],
            "plaintext": "Restaura vida y maná a lo largo del tiempo y aumenta el poder de combate. Se rellena en la tienda.",
            "image": {
                "full": "2033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "Limitado a un tipo de poción de curación. Activa ÚNICA: Consume una carga para recuperar 125 de vida y 75 de maná durante 12 s. Otorga Toque de corrupción durante ese tiempo. Contiene un máximo de 3 cargas y se rellena al visitar la tienda. Toque de corrupción: Los hechizos y ataques de daño queman a los campeones enemigos e infligen 15-30 de daño mágico durante 3 s (la mitad de daño en el caso de hechizos de efecto en área o de daño prolongado. El daño aumenta según el nivel del campeón). (Poción de corrupción se puede usar incluso con la vida y el maná completos).",
            "effect": {
                "Effect3Amount": "12",
                "Effect1Amount": "125",
                "Effect2Amount": "75",
                "Effect6Amount": "0.1",
                "Effect9Amount": "30",
                "Effect4Amount": "3",
                "Effect7Amount": "15",
                "Effect8Amount": "3",
                "Effect5Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {},
            "id": 2033,
            "name": "Poción de corrupción"
        },
        "2045": {
            "from": [
                "2049",
                "1028"
            ],
            "description": "<stats>+500 de vida</stats><br><br><unique>Pasiva ÚNICA:</unique> Los enfriamientos de activas de objeto se reducen un 20%.<br><active>Activa ÚNICA - Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revela la zona circundante durante 150 s. Acumula hasta 4 cargas y se rellena visitando la tienda.<br><br><rules>(Un jugador solo puede tener 3 <font color='#BBFFFF'>Guardianes invisibles</font> sobre el mapa al mismo tiempo. Las activas y las pasivas únicas con el mismo nombre no se acumulan).</rules>",
            "gold": {
                "total": 1600,
                "sell": 640,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Health",
                "Vision"
            ],
            "plaintext": "Aumenta la vida notablemente y proporciona Guardianes invisibles a lo largo del tiempo.",
            "image": {
                "full": "2045.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+500 de vida Pasiva ÚNICA: Los enfriamientos de activas de objeto se reducen un 20%. Activa ÚNICA - Vigilancia: Consume una carga para colocar un Guardián invisible que revela la zona circundante durante 150 s. Acumula hasta 4 cargas y se rellena visitando la tienda. (Un jugador solo puede tener 3 Guardianes invisibles sobre el mapa al mismo tiempo. Las activas y las pasivas únicas con el mismo nombre no se acumulan).",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "4",
                "Effect3Amount": "150"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 500
            },
            "id": 2045,
            "name": "Piedra de visión de rubí"
        },
        "2047": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<consumable>Pulsar para utilizar.</consumable> Concede la visión de las unidades invisibles u ocultas cercanas durante 5 min.",
            "gold": {
                "total": 300,
                "sell": 120,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Permite al campeón ver las unidades enemigas invisibles u ocultas.",
            "image": {
                "full": "2047.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "Pulsar para utilizar. Concede la visión de las unidades invisibles u ocultas cercanas durante 5 min.",
            "colloq": "Oracle's Extract",
            "consumed": true,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2047,
            "name": "Extracto del oráculo"
        },
        "2049": {
            "from": [
                "1028"
            ],
            "description": "<stats>+150 vida</stats><br><br><active>Activa ÚNICA, Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revela la zona circundante durante 150 s. Acumula hasta 3 cargas que se rellenan visitando la tienda. <br><br><rules>(Un jugador solo puede tener 3 <font color='#BBFFFF'>Guardianes invisibles</font> sobre el mapa al mismo tiempo. Las activas únicas con el mismo nombre no se acumulan).</rules>",
            "gold": {
                "total": 800,
                "sell": 320,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Health",
                "Vision"
            ],
            "plaintext": "Aumenta la vida y proporciona Guardianes invisibles a lo largo del tiempo.",
            "image": {
                "full": "2049.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "+150 vida Activa ÚNICA, Vigilancia: Consume una carga para colocar un Guardián invisible que revela la zona circundante durante 150 s. Acumula hasta 3 cargas que se rellenan visitando la tienda. (Un jugador solo puede tener 3 Guardianes invisibles sobre el mapa al mismo tiempo. Las activas únicas con el mismo nombre no se acumulan).",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "150"
            },
            "colloq": "Sightstone",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2045",
                "2301",
                "2302",
                "2303"
            ],
            "stats": {
                "FlatHPPoolMod": 150
            },
            "id": 2049,
            "name": "Piedra de visión"
        },
        "2050": {
            "stats": {},
            "description": "<consumable>Pulsar para utilizar.</consumable> Coloca un guardián invisible que revela la zona circundante durante 60 s.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Consumable"
            ],
            "image": {
                "full": "2050.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "Pulsar para utilizar. Coloca un guardián invisible que revela la zona circundante durante 60 s.",
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2050,
            "name": "Guardián del explorador"
        },
        "2051": {
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatHPRegenMod": 4
            },
            "description": "<stats>+150 de vida</stats><br><br><passive>Pasiva: </passive>Restaura 20 de vida cada 5 s.<br><unique>Pasiva ÚNICA:</unique> Bloquea 12 de daño de ataques y hechizos de campeones (25% de efectividad contra habilidades de daño prolongado).<br><br><groupLimit>Limitado a 1 objeto de guardián.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Lane"
            ],
            "plaintext": "Buen objeto inicial para tanques.",
            "image": {
                "full": "2051.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 96
            },
            "sanitizedDescription": "+150 de vida Pasiva: Restaura 20 de vida cada 5 s. Pasiva ÚNICA: Bloquea 12 de daño de ataques y hechizos de campeones (25% de efectividad contra habilidades de daño prolongado). Limitado a 1 objeto de guardián.",
            "effect": {
                "Effect1Amount": "12",
                "Effect2Amount": "0.25"
            },
            "colloq": "Brazo Dorado de Kobe; Bícep Dorado de Kobe; Cuerno; Cuerno del LoboHombre; LoboHombre; Guardian's Horn",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2051,
            "name": "Cuerno del guardián"
        },
        "2052": {
            "stats": {},
            "description": "Esta sabrosa mezcla de pollo de granja avarosano y especias de Freljord sin componentes nocivos contiene los nutrientes necesarios para hacer que tu poro siga ronroneando de placer.<br><br><i> Todas las ganancias se donarán para combatir la crueldad animal noxiana.</i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 144
            },
            "sanitizedDescription": "Esta sabrosa mezcla de pollo de granja avarosano y especias de Freljord sin componentes nocivos contiene los nutrientes necesarios para hacer que tu poro siga ronroneando de placer. Todas las ganancias se donarán para combatir la crueldad animal noxiana.",
            "stacks": 2,
            "consumed": true,
            "inStore": false,
            "id": 2052,
            "name": "Snack para poros"
        },
        "2053": {
            "from": [
                "1006",
                "1029"
            ],
            "description": "<stats>+30 armadura<br>+125% regeneración de vida básica </stats><br><br><unique>Pasiva ÚNICA, Corredor entre Puntos:</unique> Proporciona hasta +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, incluso las destruidas, y Puertas del Vacío.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "HealthRegen",
                "NonbootsMovement"
            ],
            "plaintext": "Mejora la velocidad de movimiento cerca de las torretas",
            "image": {
                "full": "2053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 192
            },
            "sanitizedDescription": "+30 armadura +125% regeneración de vida básica Pasiva ÚNICA, Corredor entre Puntos: Proporciona hasta +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, incluso las destruidas, y Puertas del Vacío.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2"
            },
            "colloq": "Raptor Cloak",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3512",
                "3056",
                "3060",
                "3069"
            ],
            "stats": {
                "FlatArmorMod": 30
            },
            "id": 2053,
            "name": "Manto de picuchillo"
        },
        "2054": {
            "stats": {},
            "description": "¡Con todo el sabor del Snack normal para poros, pero sin calorías! Mantén a tu poro feliz... y sano.<br><br><consumable>Pulsar para utilizar.</consumable> Le da a tu poro un sano y delicioso tentempié.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "image": {
                "full": "2054.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 240
            },
            "sanitizedDescription": "¡Con todo el sabor del Snack normal para poros, pero sin calorías! Mantén a tu poro feliz... y sano. Pulsar para utilizar. Le da a tu poro un sano y delicioso tentempié.",
            "inStore": false,
            "consumed": true,
            "id": 2054,
            "name": "Snack ligero para poros"
        },
        "2055": {
            "stats": {},
            "description": "<groupLimit>Solo se pueden llevar 3 guardianes de control en el inventario.</groupLimit><br><br><consumable>Pulsar para utilizar:</consumable> Coloca un guardián que otorga visión de la zona circundante. Este dispositivo también revela las trampas invisibles y revela/deshabilita los guardianes. Los guardianes de control no deshabilitan otros guardianes de control. Las unidades en camuflaje también serán reveladas. <br><br>Límite de 1 <font color='#BBFFFF'>guardianes de control</font> en el mapa por jugador.",
            "gold": {
                "total": 75,
                "sell": 30,
                "base": 75,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Lane",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Se usa para desactivar guardianes y trampas invisibles de una zona.",
            "image": {
                "full": "2055.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 288
            },
            "sanitizedDescription": "Solo se pueden llevar 3 guardianes de control en el inventario. Pulsar para utilizar: Coloca un guardián que otorga visión de la zona circundante. Este dispositivo también revela las trampas invisibles y revela/deshabilita los guardianes. Los guardianes de control no deshabilitan otros guardianes de control. Las unidades en camuflaje también serán reveladas. Límite de 1 guardianes de control en el mapa por jugador.",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "3"
            },
            "stacks": 3,
            "colloq": "naranja;",
            "consumed": true,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 2055,
            "name": "Guardián de control"
        },
        "2138": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>No se puede comprar antes del nivel 9.</levelLimit></stats><br><br><consumable>Pulsar para utilizar.</consumable> Otorga +300 de vida, 25% de tenacidad, aumento del tamaño del campeón y <font color='#FF8811'><u>Senda del Hierro</u></font> durante 3 minutos.<br><br><font color='#FF8811'><u>Senda del Hierro:</u></font> Al moverse, se deja detrás una senda que aumenta un 15% la velocidad de movimiento de los campeones aliados.<br><br><rules>(Solo se puede tener un Elixir activo)</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Consumable",
                "NonbootsMovement",
                "Tenacity"
            ],
            "plaintext": "Aumenta temporalmente las defensas y deja un rastro que pueden seguir los aliados.",
            "image": {
                "full": "2138.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 336
            },
            "sanitizedDescription": "No se puede comprar antes del nivel 9. Pulsar para utilizar. Otorga +300 de vida, 25% de tenacidad, aumento del tamaño del campeón y Senda del Hierro durante 3 minutos. Senda del Hierro: Al moverse, se deja detrás una senda que aumenta un 15% la velocidad de movimiento de los campeones aliados. (Solo se puede tener un Elixir activo)",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "300",
                "Effect2Amount": "0.25",
                "Effect6Amount": "0",
                "Effect4Amount": "0.15",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "0.15"
            },
            "colloq": "white",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2138,
            "name": "Elixir de hierro"
        },
        "2139": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>No se puede comprar antes del nivel 9.</levelLimit></stats><br><br><consumable>Pulsar para utilizar.</consumable> Otorga +50 de poder de habilidad, 15 de regeneración de maná adicional cada 5 s y <font color='#FF8811'><u>Brujería</u></font> durante 3 minutos. <br><br><font color='#FF8811'><u>Brujería:</u></font> Al causar daño a un campeón o una torreta, se inflige 25 de daño verdadero adicional. Este efecto tiene un enfriamiento de 5 s contra campeones, pero contra torretas no tiene enfriamiento.<br><br><rules>(Solo se puede tener un Elixir activo)</rules><br>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Otorga temporalmente poder de habilidad y daño adicional a campeones y torretas.",
            "image": {
                "full": "2139.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 384
            },
            "sanitizedDescription": "No se puede comprar antes del nivel 9. Pulsar para utilizar. Otorga +50 de poder de habilidad, 15 de regeneración de maná adicional cada 5 s y Brujería durante 3 minutos. Brujería: Al causar daño a un campeón o una torreta, se inflige 25 de daño verdadero adicional. Este efecto tiene un enfriamiento de 5 s contra campeones, pero contra torretas no tiene enfriamiento. (Solo se puede tener un Elixir activo)",
            "effect": {
                "Effect3Amount": "25",
                "Effect1Amount": "50",
                "Effect2Amount": "50",
                "Effect6Amount": "3",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "5"
            },
            "colloq": "azul",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2139,
            "name": "Elixir de brujería"
        },
        "2140": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<stats><levelLimit>No se puede comprar antes del nivel 9.</levelLimit></stats><br><br><consumable>Pulsar para utilizar.</consumable> Otorga +30 de daño de ataque y <font color='#FF8811'><u>Sed de sangre</u></font> durante 3 minutos.<br><br><font color='#FF8811'><u>Sed de sangre:</u></font> Se recupera como vida el 15% del daño físico infligido a campeones.<br><br><rules>(Solo se puede tener un Elixir activo)</rules>",
            "gold": {
                "total": 500,
                "sell": 200,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Consumable",
                "Damage",
                "LifeSteal",
                "SpellVamp"
            ],
            "plaintext": "Otorga temporalmente daño de ataque y te cura cuando infliges daño físico a campeones.",
            "image": {
                "full": "2140.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 432
            },
            "sanitizedDescription": "No se puede comprar antes del nivel 9. Pulsar para utilizar. Otorga +30 de daño de ataque y Sed de sangre durante 3 minutos. Sed de sangre: Se recupera como vida el 15% del daño físico infligido a campeones. (Solo se puede tener un Elixir activo)",
            "effect": {
                "Effect3Amount": "0.15",
                "Effect1Amount": "30",
                "Effect2Amount": "30",
                "Effect6Amount": "0",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "9",
                "Effect5Amount": "0"
            },
            "colloq": "rojo",
            "consumed": true,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 2140,
            "name": "Elixir de cólera"
        },
        "2301": {
            "from": [
                "2049",
                "3098"
            ],
            "description": "<stats>+200 de vida<br><mana>+50% de regeneración de maná básica </mana><br>+35 de poder de habilidad<br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Tributo:</unique> Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s.<br><active>Activa ÚNICA - Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>guardián invisible</font> que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Tributo</font> se transforma en <font color='#CFBF84'><a href='frostqueenslinequestreward'>Tributo a la reina</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "ManaRegen",
                "Vision",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Ofrece poder de habilidad y Guardianes invisibles a lo largo del tiempo.",
            "image": {
                "full": "2301.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 0
            },
            "sanitizedDescription": "+200 de vida +50% de regeneración de maná básica +35 de poder de habilidad +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Tributo: Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Activa ÚNICA - Vigilancia: Consume una carga para colocar un guardián invisible que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Tributo se transforma en Tributo a la reina. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "0",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "150",
                "Effect8Amount": "4",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 35
            },
            "id": 2301,
            "name": "Ojo de los vigilantes"
        },
        "2302": {
            "from": [
                "2049",
                "3096"
            ],
            "description": "<stats>+200 de vida<br>+125% de regeneración de vida básica <br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Favor: </unique>Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan <font color='#D4AF37'>40</font> de oro o un<font color='#44DDFF'>15%</font> del maná que te falte (15 como mínimo). Los súbditos con cañón siempre sueltan monedas.<br><active>Activa ÚNICA - Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Favor</font> se transforma en <font color='#CFBF84'><a href='coinlinequestreward'>Favor del emperador</a></font> y recibes un <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir de habilidad</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 1900,
                "sell": 760,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "Vision",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Otorga oro, maná, y guardianes invisibles periódicamente.",
            "image": {
                "full": "2302.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 48
            },
            "sanitizedDescription": "+200 de vida +125% de regeneración de vida básica +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Favor: Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan 40 de oro o un15% del maná que te falte (15 como mínimo). Los súbditos con cañón siempre sueltan monedas. Activa ÚNICA - Vigilancia: Consume una carga para colocar un Guardián invisible que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Favor se transforma en Favor del emperador y recibes un Elixir de habilidad. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect3Amount": "25",
                "Effect1Amount": "2",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "0.15",
                "Effect9Amount": "0",
                "Effect11Amount": "40",
                "Effect4Amount": "4",
                "Effect7Amount": "150",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 2302,
            "name": "Ojo del oasis"
        },
        "2303": {
            "from": [
                "2049",
                "3097"
            ],
            "description": "<stats>+500 de vida<br>+200% de regeneración de vida básica <br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Botín de guerra:</unique> Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 320 de vida (+20 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 50 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 30 s. Máximo: 4 cargas.<br><active>Activa ÚNICA - Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Batería de escudo</font>, un escudo permanente que se regenera lentamente fuera de combate.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 2300,
                "sell": 920,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Vision",
                "Active",
                "GoldPer"
            ],
            "plaintext": "Ofrece vida y Guardianes invisibles a lo largo del tiempo.",
            "image": {
                "full": "2303.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 96
            },
            "sanitizedDescription": "+500 de vida +200% de regeneración de vida básica +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Botín de guerra: Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 320 de vida (+20 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 50 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 30 s. Máximo: 4 cargas. Activa ÚNICA - Vigilancia: Consume una carga para colocar un Guardián invisible que revela la zona circundante durante 150 s. Contiene hasta 4 cargas que se rellenan al visitar la tienda. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Batería de escudo, un escudo permanente que se regenera lentamente fuera de combate. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect3Amount": "30",
                "Effect1Amount": "320",
                "Effect2Amount": "50",
                "Effect6Amount": "0",
                "Effect12Amount": "30",
                "Effect9Amount": "2",
                "Effect11Amount": "650",
                "Effect4Amount": "4",
                "Effect7Amount": "150",
                "Effect8Amount": "0",
                "Effect13Amount": "4",
                "Effect10Amount": "20",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 500
            },
            "id": 2303,
            "name": "Ojo del equinoccio"
        },
        "3001": {
            "from": [
                "3010",
                "1057"
            ],
            "description": "<stats>+350 de vida<br><mana>+300 de maná</mana><br>+55 de resistencia mágica<br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA - Eternidad:</unique> Se recupera un 15% del daño infligido por campeones en forma de maná. Al gastar maná, se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento.<br><aura>Aura ÚNICA:</aura> Los campeones enemigos cercanos reciben un 10% más de daño mágico.",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1080,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "Mana",
                "ManaRegen",
                "Aura",
                "CooldownReduction",
                "MagicPenetration"
            ],
            "plaintext": "Los enemigos cercanos reciben más daño mágico.",
            "image": {
                "full": "3001.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 144
            },
            "sanitizedDescription": "+350 de vida +300 de maná +55 de resistencia mágica +10% de reducción de enfriamiento Pasiva ÚNICA - Eternidad: Se recupera un 15% del daño infligido por campeones en forma de maná. Al gastar maná, se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento. Aura ÚNICA: Los campeones enemigos cercanos reciben un 10% más de daño mágico.",
            "effect": {
                "Effect3Amount": "0.1",
                "Effect1Amount": "-10",
                "Effect2Amount": "-25",
                "Effect6Amount": "0.15",
                "Effect4Amount": "25",
                "Effect5Amount": "0.2"
            },
            "colloq": "Abyssal Scepter",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 350,
                "FlatSpellBlockMod": 55
            },
            "id": 3001,
            "name": "Máscara abisal"
        },
        "3003": {
            "from": [
                "3070",
                "1058"
            ],
            "description": "<stats>+80 de poder de habilidad<br><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado.<br><unique>Pasiva ÚNICA, Carga de maná:</unique> Otorga +8 de maná máximo (máximo +750 de maná) por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Al alcanzar +750 de maná, se convierte en Abrazo del serafín.</mana>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el poder de habilidad según el maná máximo.",
            "image": {
                "full": "3003.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 192
            },
            "sanitizedDescription": "+80 de poder de habilidad +250 de maná Pasiva ÚNICA, Asombro: Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado. Pasiva ÚNICA, Carga de maná: Otorga +8 de maná máximo (máximo +750 de maná) por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Al alcanzar +750 de maná, se convierte en Abrazo del serafín.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.03",
                "Effect2Amount": "8",
                "Effect6Amount": "0",
                "Effect4Amount": "2",
                "Effect7Amount": "0.25",
                "Effect5Amount": "8"
            },
            "colloq": "aa",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3003,
            "name": "Bastón del arcángel"
        },
        "3004": {
            "from": [
                "3070",
                "1037"
            ],
            "description": "<stats>+25 de daño de ataque<br><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga daño de ataque igual al 2% del maná máximo. Devuelve el 15% del maná gastado.<br><unique>Pasiva ÚNICA, Carga de maná:</unique> Otorga +4 de maná máximo (máximo +750 de maná) por cada ataque básico, lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Al alcanzar +750 de maná, se transforma en Muramana.</mana>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 775,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Mana",
                "ManaRegen",
                "OnHit"
            ],
            "plaintext": "Aumenta el daño de ataque según el maná máximo.",
            "image": {
                "full": "3004.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 240
            },
            "sanitizedDescription": "+25 de daño de ataque +250 de maná Pasiva ÚNICA, Asombro: Otorga daño de ataque igual al 2% del maná máximo. Devuelve el 15% del maná gastado. Pasiva ÚNICA, Carga de maná: Otorga +4 de maná máximo (máximo +750 de maná) por cada ataque básico, lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Al alcanzar +750 de maná, se transforma en Muramana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.02",
                "Effect2Amount": "4",
                "Effect6Amount": "1",
                "Effect4Amount": "2",
                "Effect7Amount": "0.15",
                "Effect5Amount": "8"
            },
            "colloq": "Manamune",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25
            },
            "id": 3004,
            "name": "Manamune"
        },
        "3006": {
            "from": [
                "1001",
                "1042"
            ],
            "description": "<stats> +35% velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +45 de velocidad de movimiento",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "Boots"
            ],
            "plaintext": "Mejora la velocidad de movimiento y la velocidad de ataque.",
            "image": {
                "full": "3006.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 288
            },
            "sanitizedDescription": "+35% velocidad de ataque Pasiva ÚNICA, Movimiento mejorado: +45 de velocidad de movimiento",
            "colloq": "Berserker's Greaves",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "PercentAttackSpeedMod": 0.35
            },
            "id": 3006,
            "name": "Grebas de berserker"
        },
        "3007": {
            "from": [
                "3073",
                "1058"
            ],
            "description": "<stats>+80 de poder de habilidad<br><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA - Asombro:</unique> Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado.<br><unique>Pasiva ÚNICA - Carga de maná:</unique> Otorga +12 de maná máximo (máximo +750 de maná) por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Al alcanzar +750 de maná, se convierte en Abrazo del serafín.</mana>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el poder de habilidad según el maná máximo.",
            "image": {
                "full": "3007.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 336
            },
            "sanitizedDescription": "+80 de poder de habilidad +250 de maná Pasiva ÚNICA - Asombro: Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado. Pasiva ÚNICA - Carga de maná: Otorga +12 de maná máximo (máximo +750 de maná) por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Al alcanzar +750 de maná, se convierte en Abrazo del serafín.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.03",
                "Effect2Amount": "12",
                "Effect6Amount": "0",
                "Effect4Amount": "2",
                "Effect7Amount": "0.25",
                "Effect5Amount": "8"
            },
            "colloq": "aa",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3007,
            "name": "Bastón del arcángel (carga rápida)"
        },
        "3008": {
            "from": [
                "3073",
                "1037"
            ],
            "description": "<stats>+25 de daño de ataque<br><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA - Asombro:</unique> Otorga daño de ataque igual al 2% del maná máximo. Devuelve el 15% del maná gastado.<br><unique>Pasiva ÚNICA - Carga de maná:</unique> Otorga +6 de maná máximo (máximo +750 maná) por cada ataque básico, lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Al alcanzar +750 de maná, se transforma en Muramana.</mana>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 775,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Mana",
                "ManaRegen",
                "OnHit"
            ],
            "plaintext": "Aumenta el daño de ataque según el maná máximo.",
            "image": {
                "full": "3008.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 384
            },
            "sanitizedDescription": "+25 de daño de ataque +250 de maná Pasiva ÚNICA - Asombro: Otorga daño de ataque igual al 2% del maná máximo. Devuelve el 15% del maná gastado. Pasiva ÚNICA - Carga de maná: Otorga +6 de maná máximo (máximo +750 maná) por cada ataque básico, lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Al alcanzar +750 de maná, se transforma en Muramana.",
            "effect": {
                "Effect3Amount": "750",
                "Effect1Amount": "0.02",
                "Effect2Amount": "6",
                "Effect6Amount": "1",
                "Effect4Amount": "2",
                "Effect7Amount": "0.15",
                "Effect5Amount": "8"
            },
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25
            },
            "id": 3008,
            "name": "Manamune (carga rápida)"
        },
        "3009": {
            "from": [
                "1001"
            ],
            "description": "<unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +55 de velocidad de movimiento<br><unique>Pasiva ÚNICA, Resistencia a la ralentización:</unique> Los efectos de ralentización del movimiento se reducen un 25%.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Mejora la velocidad de movimiento y reduce el efecto de las ralentizaciones.",
            "image": {
                "full": "3009.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 432
            },
            "sanitizedDescription": "Pasiva ÚNICA, Movimiento mejorado: +55 de velocidad de movimiento Pasiva ÚNICA, Resistencia a la ralentización: Los efectos de ralentización del movimiento se reducen un 25%.",
            "effect": {
                "Effect1Amount": "0.25"
            },
            "colloq": "Boots of Swiftness",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 55
            },
            "id": 3009,
            "name": "Botas de rapidez"
        },
        "3010": {
            "from": [
                "1028",
                "1027"
            ],
            "description": "<stats>+225 de vida<br><mana>+300 de maná</mana></stats><br><br><unique>Pasiva ÚNICA, Eternidad:</unique> Se obtiene como maná un 15% del daño sufrido de campeones. <br><br>Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 15 por lanzamiento. <br><br><rules>(Los hechizos de activación curan hasta un máximo de 15 cada s).</rules>",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Gasta maná para recuperar vida.",
            "image": {
                "full": "3010.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 0
            },
            "sanitizedDescription": "+225 de vida +300 de maná Pasiva ÚNICA, Eternidad: Se obtiene como maná un 15% del daño sufrido de campeones. Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 15 por lanzamiento. (Los hechizos de activación curan hasta un máximo de 15 cada s).",
            "effect": {
                "Effect3Amount": "8",
                "Effect1Amount": "150",
                "Effect2Amount": "200",
                "Effect6Amount": "0.15",
                "Effect4Amount": "15",
                "Effect5Amount": "0.2"
            },
            "colloq": "Catalyst the Protector",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3027",
                "3029",
                "3001",
                "3030"
            ],
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 225
            },
            "id": 3010,
            "name": "Catalizador de eones"
        },
        "3020": {
            "from": [
                "1001"
            ],
            "description": "<stats>+15 <a href='FlatMagicPen'>penetración mágica</a></stats><br><br><unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +45 de velocidad de movimiento",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "MagicPenetration"
            ],
            "plaintext": "Mejora la velocidad de movimiento y el daño mágico.",
            "image": {
                "full": "3020.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 48
            },
            "sanitizedDescription": "+15 penetración mágica Pasiva ÚNICA, Movimiento mejorado: +45 de velocidad de movimiento",
            "effect": {
                "Effect1Amount": "15"
            },
            "colloq": "Sorcerer's Shoes",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "id": 3020,
            "name": "Botas de hechicero"
        },
        "3022": {
            "from": [
                "3052",
                "1011"
            ],
            "description": "<stats>+700 vida<br>+30 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Gélido:</unique> Los ataques básicos ralentizan la velocidad de movimiento del objetivo durante 1.5 s al impactar (40% de ralentización en los ataques cuerpo a cuerpo, 30% de ralentización en los ataques a distancia).",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "OnHit",
                "Slow"
            ],
            "plaintext": "Los ataques básicos ralentizan a los enemigos.",
            "image": {
                "full": "3022.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 96
            },
            "sanitizedDescription": "+700 vida +30 daño de ataque Pasiva ÚNICA, Gélido: Los ataques básicos ralentizan la velocidad de movimiento del objetivo durante 1.5 s al impactar (40% de ralentización en los ataques cuerpo a cuerpo, 30% de ralentización en los ataques a distancia).",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "0.4",
                "Effect3Amount": "0.3"
            },
            "colloq": "Frozen Mallet;fm",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatHPPoolMod": 700
            },
            "id": 3022,
            "name": "Mazo helado"
        },
        "3024": {
            "from": [
                "1027",
                "1029"
            ],
            "description": "<stats>+20 armadura<br><mana>+250 maná</mana></stats><br><br><unique>Pasiva ÚNICA:</unique> +10% reducción de enfriamiento",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "CooldownReduction",
                "Mana"
            ],
            "plaintext": "Aumenta la armadura y la reducción de enfriamiento.",
            "image": {
                "full": "3024.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 144
            },
            "sanitizedDescription": "+20 armadura +250 maná Pasiva ÚNICA: +10% reducción de enfriamiento",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "colloq": "Glacial Shroud",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3110",
                "3025",
                "3050",
                "3800",
                "3187"
            ],
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 20
            },
            "id": 3024,
            "name": "Sudario glacial"
        },
        "3025": {
            "from": [
                "3057",
                "3024"
            ],
            "description": "<stats>+65 armadura<br>+20% reducción de enfriamiento<br><mana>+500 maná</mana></stats><br><br><unique>Pasiva ÚNICA, Hoja Encantada:</unique> Tras usar una habilidad, el siguiente ataque básico inflige daño físico adicional equivalente al 100% del daño de ataque básico a los enemigos que estén cerca del objetivo, y crea durante 2 s un campo helado que reduce un 30% la velocidad de movimiento de los rivales (1.5 s de enfriamiento).<br><br>El tamaño de la zona aumenta según la armadura adicional.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Mana",
                "CooldownReduction",
                "Slow"
            ],
            "plaintext": "Los ataques básicos crean un campo de ralentización tras lanzar un hechizo.",
            "image": {
                "full": "3025.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 192
            },
            "sanitizedDescription": "+65 armadura +20% reducción de enfriamiento +500 maná Pasiva ÚNICA, Hoja Encantada: Tras usar una habilidad, el siguiente ataque básico inflige daño físico adicional equivalente al 100% del daño de ataque básico a los enemigos que estén cerca del objetivo, y crea durante 2 s un campo helado que reduce un 30% la velocidad de movimiento de los rivales (1.5 s de enfriamiento). El tamaño de la zona aumenta según la armadura adicional.",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "1",
                "Effect3Amount": "2",
                "Effect4Amount": "-0.3",
                "Effect5Amount": "1.5"
            },
            "colloq": "puño congelado",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 500,
                "FlatArmorMod": 65
            },
            "id": 3025,
            "name": "Guantelete de hielo"
        },
        "3026": {
            "from": [
                "1038",
                "1029"
            ],
            "description": "<stats>+40 de daño de ataque<br>+30 de armadura</stats><br><br><unique>Pasiva ÚNICA:</unique> Tras sufrir un daño letal, restaura un 50% de la vida básica y un 30% del maná máximo tras 4 s de inmovilidad (300 s de enfriamiento).",
            "gold": {
                "total": 2400,
                "sell": 960,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Damage"
            ],
            "plaintext": "Revive periódicamente al campeón tras la muerte.",
            "image": {
                "full": "3026.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 240
            },
            "sanitizedDescription": "+40 de daño de ataque +30 de armadura Pasiva ÚNICA: Tras sufrir un daño letal, restaura un 50% de la vida básica y un 30% del maná máximo tras 4 s de inmovilidad (300 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "4",
                "Effect3Amount": "300",
                "Effect4Amount": "0.3"
            },
            "colloq": "Guardian Angel;ga",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatArmorMod": 30,
                "FlatPhysicalDamageMod": 40
            },
            "id": 3026,
            "name": "Ángel de la guarda"
        },
        "3027": {
            "from": [
                "3010",
                "1026"
            ],
            "description": "<stats>+300 de vida<br><mana>+300 de maná</mana><br>+60 de poder de habilidad</stats><br><br><passive>Pasiva:</passive> Otorga +20 de vida, +10 de maná y +4 de poder de habilidad por acumulación (máximo +200 de vida, +100 de maná y +40 de poder de habilidad). Otorga 1 acumulación por minuto (máximo de 10 acumulaciones).<br><unique>Pasiva ÚNICA, Eternidad:</unique> Se obtiene como maná un 15% del daño sufrido de campeones. Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Aumenta en gran medida la vida, el maná y el poder de habilidad.",
            "image": {
                "full": "3027.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 288
            },
            "sanitizedDescription": "+300 de vida +300 de maná +60 de poder de habilidad Pasiva: Otorga +20 de vida, +10 de maná y +4 de poder de habilidad por acumulación (máximo +200 de vida, +100 de maná y +40 de poder de habilidad). Otorga 1 acumulación por minuto (máximo de 10 acumulaciones). Pasiva ÚNICA, Eternidad: Se obtiene como maná un 15% del daño sufrido de campeones. Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "20",
                "Effect2Amount": "10",
                "Effect6Amount": "150",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "200",
                "Effect8Amount": "8",
                "Effect10Amount": "0.2",
                "Effect5Amount": "10"
            },
            "colloq": "Rod of Ages;roa",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3027,
            "name": "Vara de las edades"
        },
        "3028": {
            "from": [
                "1004",
                "1033",
                "1004"
            ],
            "description": "<stats>+30 de resistencia mágica<br><mana>+50% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA - Armonía:</unique> Otorga un porcentaje adicional de regeneración de vida básica igual al porcentaje adicional de regeneración de maná básica.</unique>",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 100,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "ManaRegen"
            ],
            "plaintext": "Aumenta la regeneración de vida y de maná.",
            "image": {
                "full": "3028.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 336
            },
            "sanitizedDescription": "+30 de resistencia mágica +50% de regeneración de maná básica Pasiva ÚNICA - Armonía: Otorga un porcentaje adicional de regeneración de vida básica igual al porcentaje adicional de regeneración de maná básica.",
            "effect": {
                "Effect3Amount": "600",
                "Effect1Amount": "2",
                "Effect2Amount": "5",
                "Effect6Amount": "1",
                "Effect4Amount": "180",
                "Effect7Amount": "1",
                "Effect5Amount": "8"
            },
            "colloq": "Chalice of Harmony",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3174",
                "3222"
            ],
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "id": 3028,
            "name": "Cáliz de armonía"
        },
        "3029": {
            "from": [
                "3010",
                "1026"
            ],
            "description": "<stats>+300 de vida<br><mana>+300 de maná</mana><br>+60 de poder de habilidad</stats><br><br><passive>Pasiva:</passive> Otorga +20 de vida, +10 de maná y +4 de poder de habilidad por acumulación (máximo +200 de vida, +100 de maná y +40 de poder de habilidad). Otorga 1 acumulación cada 40 s (máximo de 10 acumulaciones).<br><unique>Pasiva ÚNICA - Eternidad:</unique> Se obtiene como maná un 15% del daño sufrido de campeones. Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Mana",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Aumenta en gran medida la vida, el maná y el poder de habilidad.",
            "image": {
                "full": "3029.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 384
            },
            "sanitizedDescription": "+300 de vida +300 de maná +60 de poder de habilidad Pasiva: Otorga +20 de vida, +10 de maná y +4 de poder de habilidad por acumulación (máximo +200 de vida, +100 de maná y +40 de poder de habilidad). Otorga 1 acumulación cada 40 s (máximo de 10 acumulaciones). Pasiva ÚNICA - Eternidad: Se obtiene como maná un 15% del daño sufrido de campeones. Al gastar maná se recupera un 20% del coste como vida, hasta un máximo de 25 por lanzamiento.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "20",
                "Effect2Amount": "10",
                "Effect6Amount": "150",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "200",
                "Effect8Amount": "8",
                "Effect10Amount": "0.2",
                "Effect5Amount": "10"
            },
            "colloq": "roa",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3029,
            "name": "Vara de las edades (carga rápida)"
        },
        "3030": {
            "from": [
                "3010",
                "3145"
            ],
            "description": "<stats>+300 de vida<br><mana>+400 de maná</mana><br>+80 de poder de habilidad</stats><br><br><unique>Pasiva ÚNICA - Eternidad:</unique> Se recupera un 15% del daño infligido por campeones en forma de maná. Al gastar maná se recupera un 20% del coste como vida, hasta 25 por lanzamiento.<br><unique>Activa ÚNICA - Proyectil helado:</unique> Dispara una ráfaga de proyectiles helados que infligen <scaleLevel>100-200</scaleLevel> (+35% de tu poder de habilidad) de daño mágico a los enemigos alcanzados (40 s de enfriamiento, se comparte con otros objetos <font color='#9999FF'><a href='itembolt'>hextech</a></font>).<br><br>Los enemigos alcanzados son ralentizados un 65%, que disminuye a lo largo de 0.5 s.<br><br><rules>(Proyectil helado tiene un tiempo de lanzamiento, a diferencia de otras activas).</rules> ",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "Active"
            ],
            "plaintext": "Puede activarse para disparar proyectiles helados que ralentizan a los enemigos.",
            "image": {
                "full": "3030.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 432
            },
            "sanitizedDescription": "+300 de vida +400 de maná +80 de poder de habilidad Pasiva ÚNICA - Eternidad: Se recupera un 15% del daño infligido por campeones en forma de maná. Al gastar maná se recupera un 20% del coste como vida, hasta 25 por lanzamiento. Activa ÚNICA - Proyectil helado: Dispara una ráfaga de proyectiles helados que infligen 100-200 (+35% de tu poder de habilidad) de daño mágico a los enemigos alcanzados (40 s de enfriamiento, se comparte con otros objetos hextech). Los enemigos alcanzados son ralentizados un 65%, que disminuye a lo largo de 0.5 s. (Proyectil helado tiene un tiempo de lanzamiento, a diferencia de otras activas).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "100",
                "Effect12Amount": "40",
                "Effect9Amount": "25",
                "Effect11Amount": "0.15",
                "Effect4Amount": "0.5",
                "Effect7Amount": "200",
                "Effect8Amount": "0.35",
                "Effect10Amount": "0.2",
                "Effect5Amount": "0.65"
            },
            "colloq": "frost cannon;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "id": 3030,
            "name": "Hextech GLP-800"
        },
        "3031": {
            "from": [
                "1038",
                "1037",
                "1018"
            ],
            "description": "<stats>+70 daño de ataque<br>+20% probabilidad de crítico</stats><br><br><unique>Pasiva ÚNICA:</unique> El daño adicional de los impactos críticos aumenta un 50%.",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 425,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "Damage"
            ],
            "plaintext": "Mejora enormemente los impactos críticos.",
            "image": {
                "full": "3031.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 0
            },
            "sanitizedDescription": "+70 daño de ataque +20% probabilidad de crítico Pasiva ÚNICA: El daño adicional de los impactos críticos aumenta un 50%.",
            "effect": {
                "Effect1Amount": "0.5"
            },
            "colloq": "Infinity Edge;ie",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.2
            },
            "id": 3031,
            "name": "Filo infinito"
        },
        "3033": {
            "from": [
                "3035",
                "3123"
            ],
            "description": "<stats>+50 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Verdugo:</unique> El daño físico inflige <a href='GrievousWounds'>Heridas Graves</a> a los campeones enemigos durante 5 s.<br><unique>Pasiva ÚNICA, Últimas palabras:</unique> +35% <a href='BonusArmorPen'>de penetración de armadura adicional</a>.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "plaintext": "Eficaz contra enemigos que tengan mucha recuperación de vida y armadura.",
            "image": {
                "full": "3033.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 48
            },
            "sanitizedDescription": "+50 daño de ataque Pasiva ÚNICA, Verdugo: El daño físico inflige Heridas Graves a los campeones enemigos durante 5 s. Pasiva ÚNICA, Últimas palabras: +35% de penetración de armadura adicional.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "0.35"
            },
            "colloq": "lw;grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "id": 3033,
            "name": "Recordatorio letal"
        },
        "3034": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Verdugo de gigantes:</unique> Otorga hasta +10% de daño físico contra campeones enemigos cuya vida máxima sea mayor que la tuya (+1% de daño por una diferencia de vida de 100, con una diferencia de vida máxima de 1000).<br><br><rules>(Las pasivas únicas con el mismo nombre no se acumulan).</rules>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Eficaz contra enemigos que tengan mucha vida.",
            "image": {
                "full": "3034.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 96
            },
            "sanitizedDescription": "+10 daño de ataque Pasiva ÚNICA, Verdugo de gigantes: Otorga hasta +10% de daño físico contra campeones enemigos cuya vida máxima sea mayor que la tuya (+1% de daño por una diferencia de vida de 100, con una diferencia de vida máxima de 1000). (Las pasivas únicas con el mismo nombre no se acumulan).",
            "effect": {
                "Effect1Amount": "0.1",
                "Effect2Amount": "100",
                "Effect3Amount": "0.01",
                "Effect4Amount": "1000"
            },
            "colloq": "gs",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3036"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3034,
            "name": "Verdugo de gigantes"
        },
        "3035": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Últimas palabras:</unique> +35% <a href='BonusArmorPen'>de penetración de armadura adicional</a>.",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "Damage"
            ],
            "plaintext": "Mayor eficacia contra enemigos que tengan mucha armadura.",
            "image": {
                "full": "3035.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 144
            },
            "sanitizedDescription": "+10 daño de ataque Pasiva ÚNICA, Últimas palabras: +35% de penetración de armadura adicional.",
            "effect": {
                "Effect1Amount": "0.35",
                "Effect2Amount": "0.35"
            },
            "colloq": "Last Whisper",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3033",
                "3036"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3035,
            "name": "Últimas palabras"
        },
        "3036": {
            "from": [
                "3035",
                "3034"
            ],
            "description": "<stats>+50 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Verdugo de gigantes:</unique> Otorga hasta +20% de daño físico contra campeones enemigos cuya vida máxima sea mayor que la tuya (+2% de daño por una diferencia de vida de 100, con una diferencia máxima de 1000 de vida).<br><unique>Pasiva ÚNICA, Últimas palabras:</unique> +35% de <a href='BonusArmorPen'>penetración de armadura adicional</a>.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "ArmorPenetration"
            ],
            "plaintext": "Mayor eficacia contra enemigos que tengan mucha vida y armadura.",
            "image": {
                "full": "3036.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 192
            },
            "sanitizedDescription": "+50 daño de ataque Pasiva ÚNICA, Verdugo de gigantes: Otorga hasta +20% de daño físico contra campeones enemigos cuya vida máxima sea mayor que la tuya (+2% de daño por una diferencia de vida de 100, con una diferencia máxima de 1000 de vida). Pasiva ÚNICA, Últimas palabras: +35% de penetración de armadura adicional.",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.35",
                "Effect2Amount": "0.2",
                "Effect6Amount": "1000",
                "Effect4Amount": "100",
                "Effect5Amount": "0.02"
            },
            "colloq": "lw",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50
            },
            "id": 3036,
            "name": "Recuerdos de lord Dominik"
        },
        "3040": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            },
            "description": "<stats>+80 de poder de habilidad<br><mana>+1000 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado.</mana><br><active>Activa ÚNICA, Escudo de maná:</active> Consume un 20% del maná actual para crear un escudo de 3 s de duración que absorbe un daño igual a 150 más la cantidad de maná consumida (120 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active"
            ],
            "image": {
                "full": "3040.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 240
            },
            "sanitizedDescription": "+80 de poder de habilidad +1000 de maná Pasiva ÚNICA, Asombro: Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado. Activa ÚNICA, Escudo de maná: Consume un 20% del maná actual para crear un escudo de 3 s de duración que absorbe un daño igual a 150 más la cantidad de maná consumida (120 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.03",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0",
                "Effect4Amount": "150",
                "Effect7Amount": "0.25",
                "Effect5Amount": "120"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3003,
            "id": 3040,
            "name": "Abrazo del serafín"
        },
        "3041": {
            "from": [
                "1082"
            ],
            "description": "<stats>+20 de poder de habilidad<br><mana>+200 de maná</mana></stats><br><br><unique>Pasiva ÚNICA - Pavor:</unique> Otorga +5 de poder de habilidad por acumulación de Gloria. Otorga 10% de velocidad de movimiento si tienes al menos 15 acumulaciones.<br><unique>Pasiva ÚNICA - Todo o nada:</unique> Otorga 4 de Gloria por asesinato de campeón o 2 de Gloria por ayuda, hasta un total de 25 acumulaciones de Gloria. Se pierden 10 acumulaciones de Gloria al morir.",
            "gold": {
                "total": 1400,
                "sell": 980,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana"
            ],
            "plaintext": "Concede poder de habilidad por asesinatos y ayudas.",
            "image": {
                "full": "3041.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 288
            },
            "sanitizedDescription": "+20 de poder de habilidad +200 de maná Pasiva ÚNICA - Pavor: Otorga +5 de poder de habilidad por acumulación de Gloria. Otorga 10% de velocidad de movimiento si tienes al menos 15 acumulaciones. Pasiva ÚNICA - Todo o nada: Otorga 4 de Gloria por asesinato de campeón o 2 de Gloria por ayuda, hasta un total de 25 acumulaciones de Gloria. Se pierden 10 acumulaciones de Gloria al morir.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "5",
                "Effect2Amount": "4",
                "Effect6Amount": "0.1",
                "Effect4Amount": "25",
                "Effect7Amount": "10",
                "Effect8Amount": "15",
                "Effect5Amount": "0.5"
            },
            "colloq": "Mejai's Soulstealer",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMPPoolMod": 200,
                "FlatMagicDamageMod": 20
            },
            "id": 3041,
            "name": "Robaalmas de Mejai"
        },
        "3042": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 de daño de ataque<br><mana>+1000 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga daño de ataque adicional igual al 2% del maná máximo. Devuelve el 15% del maná gastado.</mana><br><mana><unique>Pasiva ÚNICA, Impacto:</unique> Los hechizos de objetivo único y los ataques a <font color='#FFFFFF'>campeones</font> (al impactar) consumen el 3% del maná actual para causar daño físico adicional igual al doble de la cantidad de maná consumida.<br><br>Este efecto solo se activa cuando se tiene más del 20% del maná máximo.</mana>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "OnHit"
            ],
            "image": {
                "full": "3042.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 336
            },
            "sanitizedDescription": "+25 de daño de ataque +1000 de maná Pasiva ÚNICA, Asombro: Otorga daño de ataque adicional igual al 2% del maná máximo. Devuelve el 15% del maná gastado. Pasiva ÚNICA, Impacto: Los hechizos de objetivo único y los ataques a campeones (al impactar) consumen el 3% del maná actual para causar daño físico adicional igual al doble de la cantidad de maná consumida. Este efecto solo se activa cuando se tiene más del 20% del maná máximo.",
            "effect": {
                "Effect1Amount": "0.15"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3004,
            "id": 3042,
            "name": "Muramana"
        },
        "3043": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatPhysicalDamageMod": 25
            },
            "description": "<stats>+25 de daño de ataque<br><mana>+1000 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga daño de ataque adicional igual al 2% del maná máximo. Devuelve el 15% del maná gastado.</mana><br><mana><unique>Pasiva ÚNICA, Impacto:</unique> Los hechizos de objetivo único y los ataques a <font color='#FFFFFF'>campeones</font> (al impactar) consumen el 3% del maná actual para causar daño físico adicional igual al doble de la cantidad de maná consumida.<br><br>Este efecto solo se activa cuando se tiene más del 20% del maná máximo.</mana>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "OnHit"
            ],
            "image": {
                "full": "3043.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 384
            },
            "sanitizedDescription": "+25 de daño de ataque +1000 de maná Pasiva ÚNICA, Asombro: Otorga daño de ataque adicional igual al 2% del maná máximo. Devuelve el 15% del maná gastado. Pasiva ÚNICA, Impacto: Los hechizos de objetivo único y los ataques a campeones (al impactar) consumen el 3% del maná actual para causar daño físico adicional igual al doble de la cantidad de maná consumida. Este efecto solo se activa cuando se tiene más del 20% del maná máximo.",
            "effect": {
                "Effect1Amount": "0.15"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3008,
            "id": 3043,
            "name": "Muramana"
        },
        "3044": {
            "from": [
                "1028",
                "1036"
            ],
            "description": "<stats>+200 vida<br>+15 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Rabia:</unique> Los ataques básicos otorgan 20 de velocidad de movimiento durante 2 s. Los asesinatos otorgan 60. Esta velocidad de movimiento se reduce a la mitad para campeones a distancia.",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Health",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Los ataques y asesinatos otorgan una pequeña mejora de velocidad.",
            "image": {
                "full": "3044.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 432
            },
            "sanitizedDescription": "+200 vida +15 daño de ataque Pasiva ÚNICA, Rabia: Los ataques básicos otorgan 20 de velocidad de movimiento durante 2 s. Los asesinatos otorgan 60. Esta velocidad de movimiento se reduce a la mitad para campeones a distancia.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "2",
                "Effect3Amount": "60"
            },
            "colloq": "Phage",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3078",
                "3071"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 200
            },
            "id": 3044,
            "name": "Bacteriófago"
        },
        "3046": {
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "description": "<stats>+45% velocidad de ataque<br>+30% probabilidad de crítico<br>+5% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Vals espectral:</unique> Cuando estés a menos de 550 unidades de un campeón enemigo que puedas ver, otorga +7% de velocidad de movimiento. Puedes moverte entre unidades.<br><unique>Pasiva ÚNICA, Lamento:</unique> El último campeón golpeado te inflige 12% menos de daño (se termina después de 10 s sin golpear).",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement"
            ],
            "plaintext": "Te permite moverte más rápido al estar cerca de enemigos y reduce el daño recibido.",
            "image": {
                "full": "3046.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 0
            },
            "sanitizedDescription": "+45% velocidad de ataque +30% probabilidad de crítico +5% velocidad de movimiento Pasiva ÚNICA, Vals espectral: Cuando estés a menos de 550 unidades de un campeón enemigo que puedas ver, otorga +7% de velocidad de movimiento. Puedes moverte entre unidades. Pasiva ÚNICA, Lamento: El último campeón golpeado te inflige 12% menos de daño (se termina después de 10 s sin golpear).",
            "effect": {
                "Effect1Amount": "0.12",
                "Effect2Amount": "10",
                "Effect3Amount": "550",
                "Effect4Amount": "0.07"
            },
            "colloq": "Phantom Dancer;pd",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.45,
                "FlatCritChanceMod": 0.3
            },
            "id": 3046,
            "name": "Bailarín espectral"
        },
        "3047": {
            "from": [
                "1001",
                "1029"
            ],
            "description": "<stats>+30 de armadura</stats><br><br><unique>Pasiva ÚNICA:</unique> Bloquea el 10% del daño de los ataques básicos.<br><unique>Pasiva ÚNICA - Movimiento mejorado:</unique> +45 de velocidad de movimiento",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Boots"
            ],
            "plaintext": "Mejora la velocidad de movimiento y reduce el daño de los ataques básicos recibidos.",
            "image": {
                "full": "3047.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 48
            },
            "sanitizedDescription": "+30 de armadura Pasiva ÚNICA: Bloquea el 10% del daño de los ataques básicos. Pasiva ÚNICA - Movimiento mejorado: +45 de velocidad de movimiento",
            "effect": {
                "Effect1Amount": "0.1"
            },
            "colloq": "Ninja Tabi",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatArmorMod": 30
            },
            "id": 3047,
            "name": "Tabi de ninja"
        },
        "3048": {
            "stats": {
                "FlatMPPoolMod": 1000,
                "FlatMagicDamageMod": 80
            },
            "description": "<stats>+80 de poder de habilidad<br><mana>+1000 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado.</mana><br><active>Activa ÚNICA, Escudo de maná:</active> Consume un 20% del maná actual para crear un escudo de 3 s de duración que absorbe un daño igual a 150 más la cantidad de maná consumida (120 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active"
            ],
            "image": {
                "full": "3048.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 96
            },
            "sanitizedDescription": "+80 de poder de habilidad +1000 de maná Pasiva ÚNICA, Asombro: Otorga poder de habilidad igual al 3% del maná máximo. Devuelve el 25% del maná gastado. Activa ÚNICA, Escudo de maná: Consume un 20% del maná actual para crear un escudo de 3 s de duración que absorbe un daño igual a 150 más la cantidad de maná consumida (120 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.03",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0",
                "Effect4Amount": "150",
                "Effect7Amount": "0.25",
                "Effect5Amount": "120"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "specialRecipe": 3007,
            "id": 3048,
            "name": "Abrazo del serafín"
        },
        "3050": {
            "from": [
                "3105",
                "3024"
            ],
            "description": "<stats>+60 de armadura<br>+30 de resistencia mágica<br><mana>+250 de maná</mana><br>+10% de reducción de enfriamiento</stats><br><mainText><active>Activa ÚNICA - Conducto:</active> Te vinculas a un aliado sin un Conducto existente.<br><unique>Pasiva ÚNICA:</unique> Usar tu definitiva cerca de tu aliado invoca una tormenta helada a tu alrededor y prende los ataques básicos de tu aliado durante 10 s. Los enemigos que se encuentren dentro de tu tormenta helada se ven ralentizados un 20%. Además, los ataques de tu aliado queman a sus objetivos con un 50% de daño mágico adicional durante 2 s (45 s de enfriamiento).<br><br><unlockedPassive>Pacto de fuego escarchado:</unlockedPassive> Asestar ataques básicos a un enemigo con quemaduras prende fuego a tu tormenta helada, lo que inflige 40 de daño mágico por segundo y ralentiza un 40% en su lugar durante 3 s.</maintext><br><br><rules>(Los campeones solo pueden estar vinculados por una Convergencia de Zeke cada vez).</rules>",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Mana",
                "Aura",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Os proporciona bonificaciones a ti y a tus aliados al lanzar la definitiva.",
            "image": {
                "full": "3050.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 144
            },
            "sanitizedDescription": "+60 de armadura +30 de resistencia mágica +250 de maná +10% de reducción de enfriamiento Activa ÚNICA - Conducto: Te vinculas a un aliado sin un Conducto existente. Pasiva ÚNICA: Usar tu definitiva cerca de tu aliado invoca una tormenta helada a tu alrededor y prende los ataques básicos de tu aliado durante 10 s. Los enemigos que se encuentren dentro de tu tormenta helada se ven ralentizados un 20%. Además, los ataques de tu aliado queman a sus objetivos con un 50% de daño mágico adicional durante 2 s (45 s de enfriamiento). Pacto de fuego escarchado: Asestar ataques básicos a un enemigo con quemaduras prende fuego a tu tormenta helada, lo que inflige 40 de daño mágico por segundo y ralentiza un 40% en su lugar durante 3 s. (Los campeones solo pueden estar vinculados por una Convergencia de Zeke cada vez).",
            "effect": {
                "Effect3Amount": "40",
                "Effect15Amount": "0.35",
                "Effect1Amount": "-0.1",
                "Effect2Amount": "20",
                "Effect14Amount": "2",
                "Effect12Amount": "300",
                "Effect9Amount": "45",
                "Effect11Amount": "2",
                "Effect4Amount": "0.5",
                "Effect6Amount": "0.5",
                "Effect7Amount": "10",
                "Effect8Amount": "3",
                "Effect13Amount": "40",
                "Effect10Amount": "3",
                "Effect5Amount": "1000"
            },
            "colloq": "haroldykumar",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 60,
                "FlatSpellBlockMod": 30
            },
            "id": 3050,
            "name": "Convergencia de Zeke"
        },
        "3052": {
            "from": [
                "1036",
                "1028"
            ],
            "description": "<stats>+15 daño de ataque<br>+150 vida</stats><br><br><unique>Pasiva ÚNICA:</unique> Asesinar a una unidad otorga 5 de vida máxima. Se puede acumular hasta 30 veces.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "plaintext": "Daño de ataque y acumulaciones de vida al asesinar a una unidad.",
            "image": {
                "full": "3052.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 192
            },
            "sanitizedDescription": "+15 daño de ataque +150 vida Pasiva ÚNICA: Asesinar a una unidad otorga 5 de vida máxima. Se puede acumular hasta 30 veces.",
            "effect": {
                "Effect1Amount": "30",
                "Effect2Amount": "5",
                "Effect3Amount": "2",
                "Effect4Amount": "150"
            },
            "colloq": "enforcer",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3104",
                "3022",
                "3053",
                "3748"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15,
                "FlatHPPoolMod": 150
            },
            "id": 3052,
            "name": "Puño de Jaurim"
        },
        "3053": {
            "from": [
                "3052",
                "1036"
            ],
            "description": "<stats>+400 de vida<br>+30% de daño de ataque básico </stats><br><br><unique>Pasiva ÚNICA - Salvavidas:</unique> Al recibir de 400 a 1800 de daño (según el nivel) en un plazo de 5 s, obtienes un escudo equivalente a un 75% de tu vida adicional que decrece durante 3 s (60 s de enfriamiento).<br><br><unlockedPassive>Furia de Sterak:</unlockedPassive> Cuando se activa <i>Salvavidas</i>, aumenta tu tamaño y te otorga +30% de daño de ataque básico durante 8 s.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage"
            ],
            "plaintext": "Protege frente a grandes descargas de daño.",
            "image": {
                "full": "3053.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 240
            },
            "sanitizedDescription": "+400 de vida +30% de daño de ataque básico Pasiva ÚNICA - Salvavidas: Al recibir de 400 a 1800 de daño (según el nivel) en un plazo de 5 s, obtienes un escudo equivalente a un 75% de tu vida adicional que decrece durante 3 s (60 s de enfriamiento). Furia de Sterak: Cuando se activa Salvavidas, aumenta tu tamaño y te otorga +30% de daño de ataque básico durante 8 s.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "400",
                "Effect2Amount": "0.3",
                "Effect6Amount": "8",
                "Effect9Amount": "1800",
                "Effect4Amount": "0.75",
                "Effect7Amount": "60",
                "Effect8Amount": "3",
                "Effect5Amount": "0"
            },
            "colloq": "coloso;primario",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 400
            },
            "id": 3053,
            "name": "Calibrador de Sterak"
        },
        "3056": {
            "from": [
                "2053",
                "3067"
            ],
            "description": "<stats>+300 de vida<br>+50 de armadura<br>+150% de regeneración de vida básica <br>+10% de reducción de enfriamiento</stats><br><br><active>Activa ÚNICA:</active> Impide que las torretas enemigas cercanas ataquen durante 3 s (120 s de enfriamiento). Este efecto no puede usarse contra la misma torreta más de una vez cada 8 s.<br><br><unique>Pasiva ÚNICA - Corredor entre puntos:</unique> Gana hasta +20% de velocidad de movimiento a lo largo de 2 s cuando el campeón se desplaza cerca de torretas (incluidas las destruidas) o Puertas del Vacío.",
            "gold": {
                "total": 2650,
                "sell": 1855,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "CooldownReduction",
                "Health",
                "HealthRegen",
                "NonbootsMovement"
            ],
            "plaintext": "Desactiva temporalmente las torretas enemigas.",
            "image": {
                "full": "3056.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 288
            },
            "sanitizedDescription": "+300 de vida +50 de armadura +150% de regeneración de vida básica +10% de reducción de enfriamiento Activa ÚNICA: Impide que las torretas enemigas cercanas ataquen durante 3 s (120 s de enfriamiento). Este efecto no puede usarse contra la misma torreta más de una vez cada 8 s. Pasiva ÚNICA - Corredor entre puntos: Gana hasta +20% de velocidad de movimiento a lo largo de 2 s cuando el campeón se desplaza cerca de torretas (incluidas las destruidas) o Puertas del Vacío.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "120",
                "Effect3Amount": "8",
                "Effect4Amount": "0.2",
                "Effect5Amount": "1"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 50,
                "FlatHPPoolMod": 300
            },
            "id": 3056,
            "name": "Electrificador"
        },
        "3057": {
            "from": [
                "1027"
            ],
            "description": "<stats><mana>+250 maná</mana><br>+10% reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA, Hoja Encantada:</unique> Tras usar una habilidad, el siguiente ataque básico inflige al impactar daño físico adicional igual al 100% del daño de ataque básico (1.5 s de enfriamiento).",
            "gold": {
                "total": 1050,
                "sell": 735,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "CooldownReduction"
            ],
            "plaintext": "Otorga una bonificación al siguiente ataque tras lanzar un hechizo.",
            "image": {
                "full": "3057.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 336
            },
            "sanitizedDescription": "+250 maná +10% reducción de enfriamiento Pasiva ÚNICA, Hoja Encantada: Tras usar una habilidad, el siguiente ataque básico inflige al impactar daño físico adicional igual al 100% del daño de ataque básico (1.5 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "1"
            },
            "colloq": "Sheen",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3078",
                "3100",
                "3025"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3057,
            "name": "Brillo"
        },
        "3060": {
            "from": [
                "3105",
                "2053"
            ],
            "description": "<stats>+60 de armadura<br>+30 de resistencia mágica<br>+125% de regeneración de vida básica <br>+10% de reducción de enfriamiento</stats><br><br><active>Activa ÚNICA - Ascenso:</active> Aumenta mucho el poder de un súbdito en la calle y lo hace inmune al daño mágico (120 s de enfriamiento).<br><unique>Pasiva ÚNICA - Corredor entre puntos:</unique> Proporciona hasta un +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, torretas destruidas y Puertas del Vacío.",
            "gold": {
                "total": 2200,
                "sell": 1540,
                "base": 200,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Active",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Asciende a un súbdito de asedio a una unidad más poderosa.",
            "image": {
                "full": "3060.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 384
            },
            "sanitizedDescription": "+60 de armadura +30 de resistencia mágica +125% de regeneración de vida básica +10% de reducción de enfriamiento Activa ÚNICA - Ascenso: Aumenta mucho el poder de un súbdito en la calle y lo hace inmune al daño mágico (120 s de enfriamiento). Pasiva ÚNICA - Corredor entre puntos: Proporciona hasta un +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, torretas destruidas y Puertas del Vacío.",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "15",
                "Effect3Amount": "0.75",
                "Effect4Amount": "20",
                "Effect5Amount": "2"
            },
            "colloq": "bandera",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 60
            },
            "id": 3060,
            "name": "Estandarte de mando"
        },
        "3065": {
            "from": [
                "3211",
                "3067"
            ],
            "description": "<stats>+450 vida<br>+55 de resistencia mágica<br>+100% de regeneración de vida básica <br>+10% de reducción de enfriamiento</stats><br><br><unique> Pasiva ÚNICA:</unique> Aumenta un 30% toda la curación recibida.",
            "gold": {
                "total": 2800,
                "sell": 1960,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "plaintext": "Aumenta la vida y los efectos de curación.",
            "image": {
                "full": "3065.png",
                "group": "item",
                "sprite": "item0.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 432
            },
            "sanitizedDescription": "+450 vida +55 de resistencia mágica +100% de regeneración de vida básica +10% de reducción de enfriamiento Pasiva ÚNICA: Aumenta un 30% toda la curación recibida.",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "0.3",
                "Effect3Amount": "0.5"
            },
            "colloq": "Spirit Visage;sv",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatHPPoolMod": 450
            },
            "id": 3065,
            "name": "Rostro espiritual"
        },
        "3067": {
            "from": [
                "1028"
            ],
            "description": "<stats>+200 de vida </stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "Health"
            ],
            "plaintext": "Aumenta la vida y la reducción de enfriamiento.",
            "image": {
                "full": "3067.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "+200 de vida Pasiva ÚNICA: +10% de reducción de enfriamiento",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "colloq": "Kindlegem",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3187",
                "3401",
                "3065",
                "3071",
                "3109",
                "3056",
                "3083",
                "3152"
            ],
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3067,
            "name": "Gema avivadora"
        },
        "3068": {
            "from": [
                "1031",
                "1028",
                "3751"
            ],
            "description": "<stats>+425 vida<br>+60 armadura </stats><br><br><unique>Pasiva ÚNICA - Inmolar:</unique> Inflige 11 (+1 por nivel del campeón) de daño mágico cada segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos.",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Health"
            ],
            "plaintext": "Causa daño constante a los enemigos cercanos.",
            "image": {
                "full": "3068.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "+425 vida +60 armadura Pasiva ÚNICA - Inmolar: Inflige 11 (+1 por nivel del campeón) de daño mágico cada segundo a los enemigos cercanos. Inflige un 200% de daño adicional a súbditos y monstruos.",
            "effect": {
                "Effect1Amount": "11",
                "Effect2Amount": "1",
                "Effect3Amount": "2"
            },
            "colloq": "Sunfire Cape",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 425
            },
            "id": 3068,
            "name": "Capa de fuego solar"
        },
        "3069": {
            "from": [
                "3096",
                "2053"
            ],
            "description": "<stats>+45 de armadura<br>+175% de regeneración de vida básica <br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Corredor entre puntos:</unique> Proporciona hasta un 20% más de velocidad de movimiento a lo largo de 2 s cerca de torretas, torretas destruidas y Puertas del Vacío.<br><unique>Pasiva ÚNICA - Favor: </unique>Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan <font color='#D4AF37'>40</font> de oro o un <font color='#44DDFF'>15%</font> del maná que te falte (15 como mínimo). Los súbditos con cañón siempre dejan caer monedas.<br><active>Activa ÚNICA:</active> Otorga a los aliados cercanos un 40% más de velocidad de movimiento durante 3 s (60 s de enfriamiento).<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Favor</font> se transforma en <font color='#CFBF84'><a href='coinlinequestreward'>Favor del emperador</a></font> y recibes un <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir de habilidad</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit><br><br><rules><font color='#447777'>''Alaba al sol''. - Historiadora Shurelya, 22 de septiembre, 25 CLE.</font></rules>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Armor",
                "ManaRegen",
                "Active",
                "GoldPer",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Aumenta la regeneración de vida y de maná, así como la reducción de enfriamiento. Puede activarse para acelerar a los aliados cercanos.",
            "image": {
                "full": "3069.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "+45 de armadura +175% de regeneración de vida básica +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Corredor entre puntos: Proporciona hasta un 20% más de velocidad de movimiento a lo largo de 2 s cerca de torretas, torretas destruidas y Puertas del Vacío. Pasiva ÚNICA - Favor: Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan 40 de oro o un 15% del maná que te falte (15 como mínimo). Los súbditos con cañón siempre dejan caer monedas. Activa ÚNICA: Otorga a los aliados cercanos un 40% más de velocidad de movimiento durante 3 s (60 s de enfriamiento). MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Favor se transforma en Favor del emperador y recibes un Elixir de habilidad. Limitado a 1 objeto de ganancia de oro. ''Alaba al sol''. - Historiadora Shurelya, 22 de septiembre, 25 CLE.",
            "effect": {
                "Effect3Amount": "15",
                "Effect1Amount": "-0.1",
                "Effect2Amount": "2",
                "Effect6Amount": "3",
                "Effect12Amount": "0.15",
                "Effect9Amount": "2",
                "Effect11Amount": "40",
                "Effect4Amount": "25",
                "Effect7Amount": "60",
                "Effect8Amount": "20",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0.4"
            },
            "colloq": "Shurelya's Reverie",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45
            },
            "id": 3069,
            "name": "Emblema de la ascensión"
        },
        "3070": {
            "from": [
                "1027",
                "1004"
            ],
            "description": "<stats><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA, Asombro:</unique> Devuelve el 15% de maná gastado.<br><unique>Pasiva ÚNICA, Carga de maná:</unique> Otorga 4 de maná máximo por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Máximo de +750 de maná.</mana>",
            "gold": {
                "total": 750,
                "sell": 525,
                "base": 275,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Aumenta el maná máximo a medida que se gasta maná.",
            "image": {
                "full": "3070.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+250 de maná Pasiva ÚNICA, Asombro: Devuelve el 15% de maná gastado. Pasiva ÚNICA, Carga de maná: Otorga 4 de maná máximo por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Máximo de +750 de maná.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "4",
                "Effect2Amount": "8",
                "Effect6Amount": "2",
                "Effect4Amount": "8",
                "Effect7Amount": "0.15",
                "Effect5Amount": "750"
            },
            "colloq": "Tear of the Goddess",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3003",
                "3004"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3070,
            "name": "Lágrima de la diosa"
        },
        "3071": {
            "from": [
                "3044",
                "3067"
            ],
            "description": "<stats>+400 vida<br>+40 daño de ataque<br>+20% reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA:</unique> Al infligir daño físico a un campeón enemigo, lo Acuchilla y reduce su armadura un 4% durante 6 s (se acumula un máximo de 6 veces, hasta llegar a un 24%).<br><unique>Pasiva ÚNICA, Rabia:</unique> Infligir daño físico otorga 20 de velocidad de movimiento durante 2 s. Ayudar a asesinar a campeones enemigos Acuchillados o asesinar a cualquier unidad otorga 60 de velocidad de movimiento durante 2 s. Esta bonificación se reduce a la mitad en el caso de campeones a distancia.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "ArmorPenetration",
                "CooldownReduction",
                "Damage",
                "Health",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Causar daño físico a campeones enemigos reduce su armadura.",
            "image": {
                "full": "3071.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+400 vida +40 daño de ataque +20% reducción de enfriamiento Pasiva ÚNICA: Al infligir daño físico a un campeón enemigo, lo Acuchilla y reduce su armadura un 4% durante 6 s (se acumula un máximo de 6 veces, hasta llegar a un 24%). Pasiva ÚNICA, Rabia: Infligir daño físico otorga 20 de velocidad de movimiento durante 2 s. Ayudar a asesinar a campeones enemigos Acuchillados o asesinar a cualquier unidad otorga 60 de velocidad de movimiento durante 2 s. Esta bonificación se reduce a la mitad en el caso de campeones a distancia.",
            "effect": {
                "Effect3Amount": "6",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0.04",
                "Effect6Amount": "20",
                "Effect9Amount": "2",
                "Effect4Amount": "6",
                "Effect7Amount": "2",
                "Effect8Amount": "60",
                "Effect5Amount": "0.24"
            },
            "colloq": "The Black Cleaver;bc",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatHPPoolMod": 400
            },
            "id": 3071,
            "name": "La cuchilla negra"
        },
        "3072": {
            "from": [
                "1038",
                "1036",
                "1053"
            ],
            "description": "<stats>+80 daño de ataque</stats><br><br><unique>Pasiva ÚNICA: </unique> +20 de robo de vida<br><unique>Pasiva ÚNICA:</unique> Los ataques básicos pueden curarte por encima de tu nivel de vida normal. La vida adicional se acumula como un escudo que puede bloquear 50-350 de daño, en función del nivel de campeón.<br><br>Este escudo va decreciendo lentamente si no has infligido o recibido daño en los últimos 25 s.",
            "gold": {
                "total": 3700,
                "sell": 2590,
                "base": 1150,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Aumenta el daño de ataque y otorga robo de vida. Además, el robo de vida permite acumular vida por encima del máximo.",
            "image": {
                "full": "3072.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+80 daño de ataque Pasiva ÚNICA: +20 de robo de vida Pasiva ÚNICA: Los ataques básicos pueden curarte por encima de tu nivel de vida normal. La vida adicional se acumula como un escudo que puede bloquear 50-350 de daño, en función del nivel de campeón. Este escudo va decreciendo lentamente si no has infligido o recibido daño en los últimos 25 s.",
            "effect": {
                "Effect1Amount": "50",
                "Effect2Amount": "350",
                "Effect3Amount": "25",
                "Effect4Amount": "0.2"
            },
            "colloq": "The Bloodthirster;bt",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80
            },
            "id": 3072,
            "name": "La sanguinaria"
        },
        "3073": {
            "from": [
                "1027",
                "1004"
            ],
            "description": "<stats><mana>+250 de maná</mana></stats><br><br><mana><unique>Pasiva ÚNICA - Asombro:</unique> Devuelve el 15% de maná gastado.<br><unique>Pasiva ÚNICA - Carga de maná:</unique> Otorga 6 de maná máximo por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s).<br><br>Máximo de +750 de maná.</mana>",
            "gold": {
                "total": 750,
                "sell": 525,
                "base": 275,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Aumenta el maná máximo a medida que se gasta maná.",
            "image": {
                "full": "3073.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "+250 de maná Pasiva ÚNICA - Asombro: Devuelve el 15% de maná gastado. Pasiva ÚNICA - Carga de maná: Otorga 6 de maná máximo por cada lanzamiento de hechizo y gasto de maná (puede suceder hasta 2 veces cada 8 s). Máximo de +750 de maná.",
            "effect": {
                "Effect3Amount": "1",
                "Effect1Amount": "6",
                "Effect2Amount": "8",
                "Effect6Amount": "2",
                "Effect4Amount": "8",
                "Effect7Amount": "0.15",
                "Effect5Amount": "750"
            },
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3007",
                "3008"
            ],
            "stats": {
                "FlatMPPoolMod": 250
            },
            "id": 3073,
            "name": "Lágrima de la diosa (carga rápida)"
        },
        "3074": {
            "from": [
                "3077",
                "1053",
                "1037"
            ],
            "description": "<stats>+80 daño de ataque<br>+100% regeneración de vida básica <br>+12% robo de vida</stats><br><br><passive>Pasiva:</passive> El 50% del robo de vida total se aplica al daño infligido por este objeto.<br><unique>Pasiva ÚNICA - Hender:</unique> Los ataques básicos infligen entre un 20% y un 60% del daño de ataque total como daño físico adicional a los enemigos que estén cerca del objetivo impactado (cuanto más cerca estén los enemigos, más daño sufrirán).<br><active>Activa ÚNICA - Creciente:</active> Inflige entre un 60% y un 100% del daño de ataque total como daño físico a las unidades enemigas cercanas (cuanto más cerca esté el enemigo, más daño sufrirá) (10 s de enfriamiento).",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 525,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "HealthRegen",
                "LifeSteal",
                "OnHit"
            ],
            "plaintext": "Los ataques cuerpo a cuerpo afectan a los enemigos cercanos, infligiendo daño y restaurando vida.",
            "image": {
                "full": "3074.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "+80 daño de ataque +100% regeneración de vida básica +12% robo de vida Pasiva: El 50% del robo de vida total se aplica al daño infligido por este objeto. Pasiva ÚNICA - Hender: Los ataques básicos infligen entre un 20% y un 60% del daño de ataque total como daño físico adicional a los enemigos que estén cerca del objetivo impactado (cuanto más cerca estén los enemigos, más daño sufrirán). Activa ÚNICA - Creciente: Inflige entre un 60% y un 100% del daño de ataque total como daño físico a las unidades enemigas cercanas (cuanto más cerca esté el enemigo, más daño sufrirá) (10 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.2",
                "Effect2Amount": "0.6",
                "Effect3Amount": "0.6",
                "Effect4Amount": "1",
                "Effect5Amount": "10"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80,
                "PercentLifeStealMod": 0.12
            },
            "id": 3074,
            "name": "Hidra voraz"
        },
        "3075": {
            "from": [
                "1029",
                "1031"
            ],
            "description": "<stats>+100 de armadura </stats><br><br><unique>Pasiva ÚNICA:</unique> Al ser golpeado por un ataque básico, devuelves al atacante un 25% de tu armadura adicional, más un 15% del daño recibido en forma de daño mágico.<br><br><rules>(La armadura adicional es la que te dan objetos, mejoras, runas y maestrías).</rules><br><rules>(El daño devuelto se calcula en función del recibido antes de que sea reducido por la armadura).</rules>",
            "gold": {
                "total": 2350,
                "sell": 1645,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "Armor"
            ],
            "plaintext": "Devuelve el daño sufrido de ataques básicos como daño mágico.",
            "image": {
                "full": "3075.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "+100 de armadura Pasiva ÚNICA: Al ser golpeado por un ataque básico, devuelves al atacante un 25% de tu armadura adicional, más un 15% del daño recibido en forma de daño mágico. (La armadura adicional es la que te dan objetos, mejoras, runas y maestrías). (El daño devuelto se calcula en función del recibido antes de que sea reducido por la armadura).",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "0.25"
            },
            "colloq": "Thornmail",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 100
            },
            "id": 3075,
            "name": "Malla de espinas"
        },
        "3077": {
            "from": [
                "1036",
                "1006",
                "1036"
            ],
            "description": "<stats>+20 daño de ataque<br>+50% regeneración de vida básica </stats><br><br><unique>Pasiva ÚNICA - Hender:</unique> Los ataques básicos infligen entre un 20% y un 60% del daño de ataque total como daño físico adicional a los enemigos que estén cerca del objetivo en el momento del impacto (cuanto más cerca estén los enemigos, más daño sufrirán).<br><active>Activa ÚNICA - Creciente:</active> Inflige entre un 60% y un 100% del daño de ataque total como daño físico a las unidades enemigas cercanas (cuanto más cerca esté el enemigo, más daño sufrirá) (10 s de enfriamiento).",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "Damage",
                "Active"
            ],
            "plaintext": "Los ataques cuerpo a cuerpo impactan en los enemigos cercanos.",
            "image": {
                "full": "3077.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "+20 daño de ataque +50% regeneración de vida básica Pasiva ÚNICA - Hender: Los ataques básicos infligen entre un 20% y un 60% del daño de ataque total como daño físico adicional a los enemigos que estén cerca del objetivo en el momento del impacto (cuanto más cerca estén los enemigos, más daño sufrirán). Activa ÚNICA - Creciente: Inflige entre un 60% y un 100% del daño de ataque total como daño físico a las unidades enemigas cercanas (cuanto más cerca esté el enemigo, más daño sufrirá) (10 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.2",
                "Effect2Amount": "0.6",
                "Effect3Amount": "0.6",
                "Effect4Amount": "1",
                "Effect5Amount": "10"
            },
            "colloq": "Tiamat (Melee Only)",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3074",
                "3748"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 20
            },
            "id": 3077,
            "name": "Tiamat"
        },
        "3078": {
            "from": [
                "3101",
                "3057",
                "3044"
            ],
            "description": "<stats>+250 de vida<br><mana>+250 de maná</mana><br>+25 de daño de ataque<br>+40% de velocidad de ataque<br>+20% de reducción de enfriamiento<br>+5% de velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Rabia:</unique> Los ataques básicos otorgan 20 de velocidad de movimiento durante 2 s. Los asesinatos otorgan 60. Esta bonificación de velocidad de movimiento se reduce a la mitad para campeones a distancia.<br><unique>Pasiva ÚNICA, Hoja encantada:</unique> Tras usar una habilidad, el siguiente ataque básico inflige daño físico adicional igual al 200% del daño de ataque básico (1.5 s de enfriamiento).",
            "gold": {
                "total": 3733,
                "sell": 2613,
                "base": 333,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "AttackSpeed",
                "Mana",
                "CooldownReduction",
                "OnHit",
                "NonbootsMovement"
            ],
            "plaintext": "Gran cantidad de daño.",
            "image": {
                "full": "3078.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "sanitizedDescription": "+250 de vida +250 de maná +25 de daño de ataque +40% de velocidad de ataque +20% de reducción de enfriamiento +5% de velocidad de movimiento Pasiva ÚNICA, Rabia: Los ataques básicos otorgan 20 de velocidad de movimiento durante 2 s. Los asesinatos otorgan 60. Esta bonificación de velocidad de movimiento se reduce a la mitad para campeones a distancia. Pasiva ÚNICA, Hoja encantada: Tras usar una habilidad, el siguiente ataque básico inflige daño físico adicional igual al 200% del daño de ataque básico (1.5 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "60",
                "Effect3Amount": "2",
                "Effect4Amount": "2",
                "Effect5Amount": "1.5"
            },
            "colloq": "Trinity Force;triforce;tons of damage",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "FlatMPPoolMod": 250,
                "FlatPhysicalDamageMod": 25,
                "FlatHPPoolMod": 250,
                "PercentAttackSpeedMod": 0.4
            },
            "id": 3078,
            "name": "Fuerza de trinidad"
        },
        "3082": {
            "from": [
                "1029",
                "1029"
            ],
            "description": "<stats>+40 armadura</stats><br><br><unique>Pasiva ÚNICA , Acero Frío:</unique> Si te alcanza un ataque básico, reduces un 15% la velocidad de ataque del atacante durante 1 s.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Slow"
            ],
            "plaintext": "Reduce la velocidad de ataque de los campeones enemigos al recibir ataques básicos.",
            "image": {
                "full": "3082.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "+40 armadura Pasiva ÚNICA , Acero Frío: Si te alcanza un ataque básico, reduces un 15% la velocidad de ataque del atacante durante 1 s.",
            "effect": {
                "Effect1Amount": "-0.15",
                "Effect2Amount": "1"
            },
            "colloq": "Warden's Mail",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3110",
                "3143"
            ],
            "stats": {
                "FlatArmorMod": 40
            },
            "id": 3082,
            "name": "Malla del guardián"
        },
        "3083": {
            "from": [
                "1011",
                "3067",
                "3801"
            ],
            "description": "<stats>+800 de vida<br>+200% de regeneración de vida básica </stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento<br><unique>Pasiva ÚNICA:</unique> Otorga <unlockedPassive>Corazón de Warmog</unlockedPassive> si tienes al menos 2750 de vida máxima.<br><br><unlockedPassive>Corazón de Warmog:</unlockedPassive> Restaura un 25% de tu vida máxima cada 5 s si no has recibido daño en los últimos 6 s (3 s en el caso de haber recibido daño de súbditos y monstruos).",
            "gold": {
                "total": 2850,
                "sell": 1995,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "CooldownReduction"
            ],
            "plaintext": "Otorga una enorme cantidad de vida y regeneración de vida.",
            "image": {
                "full": "3083.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "+800 de vida +200% de regeneración de vida básica Pasiva ÚNICA: +10% de reducción de enfriamiento Pasiva ÚNICA: Otorga Corazón de Warmog si tienes al menos 2750 de vida máxima. Corazón de Warmog: Restaura un 25% de tu vida máxima cada 5 s si no has recibido daño en los últimos 6 s (3 s en el caso de haber recibido daño de súbditos y monstruos).",
            "effect": {
                "Effect3Amount": "0.25",
                "Effect1Amount": "0.015",
                "Effect2Amount": "5",
                "Effect6Amount": "-0.1",
                "Effect4Amount": "2750",
                "Effect7Amount": "6",
                "Effect8Amount": "3",
                "Effect5Amount": "6"
            },
            "colloq": "Warmog's Armor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 800
            },
            "id": 3083,
            "name": "Armadura de Warmog"
        },
        "3084": {
            "from": [
                "1011",
                "3801"
            ],
            "description": "<stats>+800 vida<br>+100% regeneración de vida básica </stats><br><br><unique>Pasiva ÚNICA:</unique> Al asesinar a un campeón (o contribuir a hacerlo), restaura 300 puntos de vida a lo largo de 5 s.",
            "gold": {
                "total": 2550,
                "sell": 1785,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Restaura vida al matar o ayudar.",
            "image": {
                "full": "3084.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "+800 vida +100% regeneración de vida básica Pasiva ÚNICA: Al asesinar a un campeón (o contribuir a hacerlo), restaura 300 puntos de vida a lo largo de 5 s.",
            "effect": {
                "Effect1Amount": "300",
                "Effect2Amount": "5"
            },
            "colloq": "Overlord's Bloodmail",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 800
            },
            "id": 3084,
            "name": "Sangría del soberano"
        },
        "3085": {
            "from": [
                "1042",
                "3086",
                "1042"
            ],
            "description": "<stats>+40% de velocidad de ataque<br>+30% de probabilidad de impacto crítico<br>+7% de velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA - Furia de viento:</unique> Al usar ataques básicos, se disparan rayos a un máximo de 2 enemigos cercanos al objetivo y cada uno inflige (un 40% del daño de ataque) daño físico. Los proyectiles pueden realizar impactos críticos y provocar efectos de impacto.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "AttackSpeed",
                "OnHit",
                "NonbootsMovement"
            ],
            "plaintext": "Los ataques a distancia disparan dos rayos a enemigos cercanos.",
            "image": {
                "full": "3085.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "+40% de velocidad de ataque +30% de probabilidad de impacto crítico +7% de velocidad de movimiento Pasiva ÚNICA - Furia de viento: Al usar ataques básicos, se disparan rayos a un máximo de 2 enemigos cercanos al objetivo y cada uno inflige (un 40% del daño de ataque) daño físico. Los proyectiles pueden realizar impactos críticos y provocar efectos de impacto.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "0",
                "Effect2Amount": "40",
                "Effect6Amount": "1",
                "Effect4Amount": "0",
                "Effect5Amount": "40"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "PercentAttackSpeedMod": 0.4,
                "FlatCritChanceMod": 0.3
            },
            "id": 3085,
            "name": "Huracán de Runaan"
        },
        "3086": {
            "from": [
                "1051",
                "1042"
            ],
            "description": "<stats>+15% velocidad de ataque<br>+20% probabilidad de crítico</stats><br><br><unique>Pasiva ÚNICA:</unique> +5% de velocidad de movimiento",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement"
            ],
            "plaintext": "Leves bonificaciones a la probabilidad de crítico, a la velocidad de movimiento y a la velocidad de ataque.",
            "image": {
                "full": "3086.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "+15% velocidad de ataque +20% probabilidad de crítico Pasiva ÚNICA: +5% de velocidad de movimiento",
            "effect": {
                "Effect1Amount": "0.05"
            },
            "colloq": "Zeal",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3094",
                "3085",
                "3046",
                "3087"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.15,
                "FlatCritChanceMod": 0.2
            },
            "id": 3086,
            "name": "Fervor"
        },
        "3087": {
            "from": [
                "3086",
                "2015"
            ],
            "description": "<stats>+35% velocidad de ataque<br>+30% probabilidad de crítico<br>+5% velocidad de movimiento</stats><br><br><passive>Pasiva:</passive> Al moverse y atacar se lanza un ataque con <a href='Energized'>Vigor</a>.<br><br><unique>Pasiva ÚNICA, Puñal Eléctrico:</unique> Tus ataques con Vigor infligen 60~160 de daño mágico adicional (según el nivel) a hasta 5 objetivos al impactar (inflige +65% de daño adicional a súbditos y puede lanzar ataques críticos).",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "El movimiento genera cargas que liberan rayos con el ataque básico.",
            "image": {
                "full": "3087.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "+35% velocidad de ataque +30% probabilidad de crítico +5% velocidad de movimiento Pasiva: Al moverse y atacar se lanza un ataque con Vigor. Pasiva ÚNICA, Puñal Eléctrico: Tus ataques con Vigor infligen 60~160 de daño mágico adicional (según el nivel) a hasta 5 objetivos al impactar (inflige +65% de daño adicional a súbditos y puede lanzar ataques críticos).",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "100",
                "Effect2Amount": "80",
                "Effect6Amount": "160",
                "Effect4Amount": "750",
                "Effect7Amount": "5",
                "Effect8Amount": "0.65",
                "Effect5Amount": "60"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.35,
                "FlatCritChanceMod": 0.3
            },
            "id": 3087,
            "name": "Puñal de Statikk"
        },
        "3089": {
            "from": [
                "1026",
                "1058",
                "1052"
            ],
            "description": "<stats>+120 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> Aumenta un 35% el poder de habilidad.",
            "gold": {
                "total": 3800,
                "sell": 2660,
                "base": 1265,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Aumenta enormemente el poder de habilidad.",
            "image": {
                "full": "3089.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "+120 poder de habilidad Pasiva ÚNICA: Aumenta un 35% el poder de habilidad.",
            "effect": {
                "Effect1Amount": "35"
            },
            "colloq": "dc;banksys;hat",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMagicDamageMod": 120
            },
            "id": 3089,
            "name": "Sombrero mortal de Rabadon"
        },
        "3090": {
            "from": [
                "3191",
                "1058"
            ],
            "description": "<stats>+100 poder de habilidad<br>+45 armadura</stats><br><br><unique>Pasiva ÚNICA:</unique> Aumenta el poder de habilidad un 25%.<br><active>Activa ÚNICA:</active> El campeón será invulnerable e inalcanzable durante 2.5 s, pero tampoco podrá moverse, atacar, lanzar hechizos o usar objetos durante ese tiempo (120 s de enfriamiento).",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 1050,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "SpellDamage"
            ],
            "plaintext": "Aumenta enormemente el poder de habilidad y puede activarse para entrar en inmovilidad.",
            "image": {
                "full": "3090.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "+100 poder de habilidad +45 armadura Pasiva ÚNICA: Aumenta el poder de habilidad un 25%. Activa ÚNICA: El campeón será invulnerable e inalcanzable durante 2.5 s, pero tampoco podrá moverse, atacar, lanzar hechizos o usar objetos durante ese tiempo (120 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "colloq": "hat",
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45,
                "FlatMagicDamageMod": 100
            },
            "id": 3090,
            "name": "Sombrero de Wooglet"
        },
        "3091": {
            "from": [
                "1043",
                "1057",
                "1042"
            ],
            "description": "<stats>+40% velocidad de ataque<br>+40 resistencia mágica</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen 40 puntos de daño mágico adicional al impactar.<br><unique>Pasiva ÚNICA:</unique> Los ataques básicos roban 5 de resistencia mágica al objetivo al impactar (se acumula hasta 5 veces).",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 480,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "OnHit",
                "SpellBlock"
            ],
            "plaintext": "Inflige daño mágico adicional con los ataques básicos.",
            "image": {
                "full": "3091.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "+40% velocidad de ataque +40 resistencia mágica Pasiva ÚNICA: Los ataques básicos infligen 40 puntos de daño mágico adicional al impactar. Pasiva ÚNICA: Los ataques básicos roban 5 de resistencia mágica al objetivo al impactar (se acumula hasta 5 veces).",
            "effect": {
                "Effect1Amount": "40",
                "Effect2Amount": "5",
                "Effect3Amount": "5"
            },
            "colloq": "Wit's End",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40,
                "PercentAttackSpeedMod": 0.4
            },
            "id": 3091,
            "name": "Final del ingenio"
        },
        "3092": {
            "from": [
                "3098",
                "3108"
            ],
            "description": "<stats>+60 de poder de habilidad<br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s<br><mana>+50% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA - Tributo:</unique> Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s.<br><active>Activa ÚNICA:</active> Invoca 2 fantasmas helados durante 6 s que buscan campeones enemigos en las inmediaciones. Los fantasmas revelan a los enemigos al tocarlos y los ralentizan un 40% entre 2 y 5 s, según la distancia recorrida por los fantasmas (90 s de enfriamiento).<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Tributo</font> se transforma en <font color='#CFBF84'><a href='frostqueenslinequestreward'>Tributo a la reina</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Active",
                "CooldownReduction",
                "GoldPer",
                "ManaRegen",
                "Slow",
                "SpellDamage"
            ],
            "plaintext": "Envía espectros buscadores que encuentran a los enemigos ocultos y los ralentizan.",
            "image": {
                "full": "3092.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "+60 de poder de habilidad +10% de reducción de enfriamiento +2 de oro cada 10 s +50% de regeneración de maná básica Pasiva ÚNICA - Tributo: Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Activa ÚNICA: Invoca 2 fantasmas helados durante 6 s que buscan campeones enemigos en las inmediaciones. Los fantasmas revelan a los enemigos al tocarlos y los ralentizan un 40% entre 2 y 5 s, según la distancia recorrida por los fantasmas (90 s de enfriamiento). MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Tributo se transforma en Tributo a la reina. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "0",
                "Effect16Amount": "2",
                "Effect15Amount": "0.25",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "90",
                "Effect17Amount": "650",
                "Effect12Amount": "6",
                "Effect9Amount": "2",
                "Effect11Amount": "5",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "1",
                "Effect8Amount": "2",
                "Effect13Amount": "50",
                "Effect10Amount": "-0.4",
                "Effect5Amount": "30"
            },
            "colloq": "spooky ghosts;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "id": 3092,
            "name": "Filo de la reina de hielo"
        },
        "3094": {
            "from": [
                "3086",
                "2015"
            ],
            "description": "<stats>+30% de velocidad de ataque<br>+30% de probabilidad de crítico<br>+5% de velocidad de movimiento</stats><br><br><passive>Pasiva:</passive> Al moverse y atacar se lanza un ataque con <a href='Energized'>vigor</a>.<br><br><unique>Pasiva ÚNICA - Cañón de fuego:</unique> Tus ataques con vigor obtienen un 35% de alcance adicional (+150 de alcance máximo) e infligen entre 50 y 120 de daño mágico adicional (según el nivel) al impactar.<br><br>Los ataques adquieren vigor un 25% más rápido. Los ataques con vigor funcionan contra estructuras.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CriticalStrike",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Con el movimiento se acumulan cargas que al liberarse lanzan un ataque de fuego acosador.",
            "image": {
                "full": "3094.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "+30% de velocidad de ataque +30% de probabilidad de crítico +5% de velocidad de movimiento Pasiva: Al moverse y atacar se lanza un ataque con vigor. Pasiva ÚNICA - Cañón de fuego: Tus ataques con vigor obtienen un 35% de alcance adicional (+150 de alcance máximo) e infligen entre 50 y 120 de daño mágico adicional (según el nivel) al impactar. Los ataques adquieren vigor un 25% más rápido. Los ataques con vigor funcionan contra estructuras.",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "0.35",
                "Effect2Amount": "150",
                "Effect6Amount": "0.25",
                "Effect4Amount": "120",
                "Effect5Amount": "5"
            },
            "colloq": "canon;rapidfire;rfc",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.05,
                "PercentAttackSpeedMod": 0.3,
                "FlatCritChanceMod": 0.3
            },
            "id": 3094,
            "name": "Cañón de fuego rápido"
        },
        "3096": {
            "from": [
                "1006",
                "3301"
            ],
            "description": "<stats>+50% de regeneración de vida básica <br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Favor: </unique>Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan <font color='#D4AF37'>40</font> de oro o un<font color='#44DDFF'>15%</font> del maná que te falte (15 como mínimo). Los súbditos con cañón siempre sueltan monedas. <hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Favor</font> se transforma en <font color='#CFBF84'><a href='coinlinequestreward'>Favor del emperador</a></font> y recibes un <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir de habilidad</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit><br><br><rules><font color='#447777'>''El medallón brilla con la gloria de un millar de voces expuestas al sol.'' - Historiadora Shurelya, 22 de junio, 24 CLE</font></rules>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "HealthRegen",
                "ManaRegen",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Otorga oro y maná cada vez que muere un súbdito enemigo cercano que tú no hayas matado.",
            "image": {
                "full": "3096.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "sanitizedDescription": "+50% de regeneración de vida básica +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Favor: Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan 40 de oro o un15% del maná que te falte (15 como mínimo). Los súbditos con cañón siempre sueltan monedas. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Favor se transforma en Favor del emperador y recibes un Elixir de habilidad. Limitado a 1 objeto de ganancia de oro. ''El medallón brilla con la gloria de un millar de voces expuestas al sol.'' - Historiadora Shurelya, 22 de junio, 24 CLE",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "2",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "0.15",
                "Effect9Amount": "0",
                "Effect11Amount": "40",
                "Effect4Amount": "10",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "colloq": "Philosopher's Stone",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2302",
                "3069"
            ],
            "stats": {},
            "id": 3096,
            "name": "Medallón del nómada"
        },
        "3097": {
            "from": [
                "3302",
                "1006"
            ],
            "description": "<stats>+175 de vida<br>+50% de regeneración de vida básica <br>+2 de oro cada 10 s </stats><br><br><unique>Pasiva ÚNICA - Botín de guerra:</unique> Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 200 de vida (+10 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 40 de vida y reciben el oro correspondiente.<br><br>Estos efectos requieren que haya un aliado cerca. Se recarga cada 30 s. Máximo: 3 cargas.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Batería de escudo</font>, un escudo permanente que se regenera lentamente fuera de combate.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Aura",
                "GoldPer",
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Acaba con súbditos enemigos para curar y otorgar oro periódicamente a un aliado cercano.",
            "image": {
                "full": "3097.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "+175 de vida +50% de regeneración de vida básica +2 de oro cada 10 s Pasiva ÚNICA - Botín de guerra: Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 200 de vida (+10 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 40 de vida y reciben el oro correspondiente. Estos efectos requieren que haya un aliado cerca. Se recarga cada 30 s. Máximo: 3 cargas. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Batería de escudo, un escudo permanente que se regenera lentamente fuera de combate. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect3Amount": "30",
                "Effect1Amount": "200",
                "Effect2Amount": "40",
                "Effect6Amount": "10",
                "Effect12Amount": "30",
                "Effect9Amount": "0",
                "Effect11Amount": "650",
                "Effect4Amount": "3",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "3",
                "Effect10Amount": "0",
                "Effect5Amount": "2"
            },
            "colloq": "Emblem of Valor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2303",
                "3401"
            ],
            "stats": {
                "FlatHPPoolMod": 175
            },
            "id": 3097,
            "name": "Refuerzo de Targon"
        },
        "3098": {
            "from": [
                "3303",
                "1004"
            ],
            "description": "<stats>+20 de poder de habilidad<br>+2 de oro cada 10 s<br><mana>+50% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA - Tributo:</unique> Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Asesinar súbditos provoca que Tributo tarde más en estar disponible.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive><font color='#CFBF84'>Tributo</font> se transforma en <font color='#CFBF84'><a href='frostqueenslinequestreward'>Tributo a la reina</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 850,
                "sell": 340,
                "base": 375,
                "purchasable": true
            },
            "tags": [
                "Active",
                "GoldPer",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Otorga oro cuando dañas a un enemigo.",
            "image": {
                "full": "3098.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+20 de poder de habilidad +2 de oro cada 10 s +50% de regeneración de maná básica Pasiva ÚNICA - Tributo: Los ataques y hechizos de daño contra campeones o estructuras infligen 15 de daño adicional y otorgan 15 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Asesinar súbditos provoca que Tributo tarde más en estar disponible. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA:Tributo se transforma en Tributo a la reina. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "6",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "15",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "colloq": "Kage's Lucky Pick",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "2301",
                "3092"
            ],
            "stats": {
                "FlatMagicDamageMod": 20
            },
            "id": 3098,
            "name": "Colmillo de escarcha"
        },
        "3100": {
            "from": [
                "3057",
                "3113",
                "1026"
            ],
            "description": "<stats>+80 poder de habilidad<br>+7% velocidad de movimiento<br>+10% reducción de enfriamiento<br><mana>+250 maná</mana></stats><br><br><unique>Pasiva ÚNICA, Hoja Encantada:</unique> Tras usar una habilidad, el siguiente ataque básico inflige un 75% del daño de ataque básico (+50% de poder de habilidad) como daño mágico adicional al impactar (1.5 s de enfriamiento).",
            "gold": {
                "total": 3200,
                "sell": 2240,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Otorga una bonificación al siguiente ataque tras lanzar un hechizo.",
            "image": {
                "full": "3100.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+80 poder de habilidad +7% velocidad de movimiento +10% reducción de enfriamiento +250 maná Pasiva ÚNICA, Hoja Encantada: Tras usar una habilidad, el siguiente ataque básico inflige un 75% del daño de ataque básico (+50% de poder de habilidad) como daño mágico adicional al impactar (1.5 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.75",
                "Effect2Amount": "0.5",
                "Effect3Amount": "1.5"
            },
            "colloq": "Lich Bane",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMPPoolMod": 250,
                "FlatMagicDamageMod": 80
            },
            "id": 3100,
            "name": "Perdición del liche"
        },
        "3101": {
            "from": [
                "1042",
                "1042"
            ],
            "description": "<stats>+35% velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> +10% reducción de enfriamiento",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction"
            ],
            "plaintext": "Mayor velocidad de ataque y reducción de enfriamiento.",
            "image": {
                "full": "3101.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+35% velocidad de ataque Pasiva ÚNICA: +10% reducción de enfriamiento",
            "effect": {
                "Effect1Amount": "10"
            },
            "colloq": "Stinger",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3115",
                "3137",
                "3078"
            ],
            "stats": {
                "PercentAttackSpeedMod": 0.35
            },
            "id": 3101,
            "name": "Aguijón"
        },
        "3102": {
            "from": [
                "3108",
                "1033",
                "1026"
            ],
            "description": "<stats>+70 de poder de habilidad<br>+60 de resistencia mágica<br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA:</unique> Otorga un escudo de hechizos que bloquea la siguiente habilidad enemiga. El escudo se regenera si no sufres daño de campeones enemigos durante 40 s.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "SpellDamage",
                "CooldownReduction"
            ],
            "plaintext": "Bloquea de vez en cuando las habilidades enemigas.",
            "image": {
                "full": "3102.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+70 de poder de habilidad +60 de resistencia mágica +10% de reducción de enfriamiento Pasiva ÚNICA: Otorga un escudo de hechizos que bloquea la siguiente habilidad enemiga. El escudo se regenera si no sufres daño de campeones enemigos durante 40 s.",
            "effect": {
                "Effect3Amount": "10",
                "Effect1Amount": "40",
                "Effect2Amount": "45",
                "Effect6Amount": "2",
                "Effect4Amount": "-0.1",
                "Effect5Amount": "8"
            },
            "colloq": "Banshee's Veil;bv",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatMagicDamageMod": 70
            },
            "id": 3102,
            "name": "Velo del hada de la muerte"
        },
        "3104": {
            "from": [
                "3133",
                "3052"
            ],
            "description": "<stats>+300 de vida<br>+50 de daño de ataque<br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA - Polvo al polvo:</unique> Controlar el altar más cercano te anima con un aura ardiente que inflige 25 (+1 por nivel del campeón) de daño mágico cada segundo a los enemigos cercanos (inflige un 50% de daño adicional a súbditos y monstruos). Controlar el altar más lejano provoca que tus ataques básicos quemen a los objetivos con hasta 114 de daño verdadero (en función del nivel del campeón) a lo largo de 3 s.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "Aura",
                "CooldownReduction",
                "OnHit",
                "ArmorPenetration"
            ],
            "plaintext": "Reduce la armadura de los enemigos cercanos.",
            "image": {
                "full": "3104.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "+300 de vida +50 de daño de ataque +10% de reducción de enfriamiento Pasiva ÚNICA - Polvo al polvo: Controlar el altar más cercano te anima con un aura ardiente que inflige 25 (+1 por nivel del campeón) de daño mágico cada segundo a los enemigos cercanos (inflige un 50% de daño adicional a súbditos y monstruos). Controlar el altar más lejano provoca que tus ataques básicos quemen a los objetivos con hasta 114 de daño verdadero (en función del nivel del campeón) a lo largo de 3 s.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "1",
                "Effect3Amount": "0.5"
            },
            "colloq": "lvd;",
            "maps": {
                "8": false,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 50,
                "FlatHPPoolMod": 300
            },
            "id": 3104,
            "name": "Saqueador de lord Van Damm"
        },
        "3105": {
            "from": [
                "1033",
                "1029"
            ],
            "description": "<stats>+30 de armadura<br>+30 de resistencia mágica</stats>",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor"
            ],
            "plaintext": "Otorga armadura y resistencia mágica.",
            "image": {
                "full": "3105.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "+30 de armadura +30 de resistencia mágica",
            "colloq": "Aegis of the Legion",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3190",
                "3050",
                "3060"
            ],
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatArmorMod": 30
            },
            "id": 3105,
            "name": "Protección de la legión"
        },
        "3107": {
            "from": [
                "3114",
                "3801"
            ],
            "description": "<stats>+200 de vida<br>+50% de regeneración de vida básica <br>+150% de regeneración de maná básica <br>+10% de reducción de enfriamiento</stats><br><br><passive>Pasiva ÚNICA:</passive> +10% de poder de curaciones y escudos.<br><active>Activa ÚNICA:</active> Selecciona como objetivo un área a una distancia máxima de 5500. Después de 2,5 s, invoca un rayo de luz que cura a los aliados 10 (+20 por nivel del objetivo) de vida, quema a los campeones enemigos un 10% de su vida máxima como daño <font color='#FFFFFF'>verdadero</font> e inflige 250 de daño <font color='#FFFFFF'>verdadero</font> a los súbditos enemigos (120 s de enfriamiento). El poder de curaciones y escudos es 3 veces más efectivo para la curación de Redención.<br><br>Se puede usar estando muerto.<br><br><rules>Tiene la mitad del efecto si el objetivo ha recibido los efectos de otra Redención hace poco.</rules>",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Mejora aún más las defensas de los aliados cercanos.",
            "image": {
                "full": "3107.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "+200 de vida +50% de regeneración de vida básica +150% de regeneración de maná básica +10% de reducción de enfriamiento Pasiva ÚNICA: +10% de poder de curaciones y escudos. Activa ÚNICA: Selecciona como objetivo un área a una distancia máxima de 5500. Después de 2,5 s, invoca un rayo de luz que cura a los aliados 10 (+20 por nivel del objetivo) de vida, quema a los campeones enemigos un 10% de su vida máxima como daño verdadero e inflige 250 de daño verdadero a los súbditos enemigos (120 s de enfriamiento). El poder de curaciones y escudos es 3 veces más efectivo para la curación de Redención. Se puede usar estando muerto. Tiene la mitad del efecto si el objetivo ha recibido los efectos de otra Redención hace poco.",
            "effect": {
                "Effect3Amount": "20",
                "Effect1Amount": "0.1",
                "Effect2Amount": "10",
                "Effect6Amount": "120",
                "Effect9Amount": "0.5",
                "Effect11Amount": "3",
                "Effect4Amount": "0.1",
                "Effect7Amount": "550",
                "Effect8Amount": "5500",
                "Effect10Amount": "8",
                "Effect5Amount": "250"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3107,
            "name": "Redención"
        },
        "3108": {
            "from": [
                "1052"
            ],
            "description": "<stats>+30 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> +10% reducción de enfriamiento",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 465,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el poder de habilidad y la reducción de enfriamiento.",
            "image": {
                "full": "3108.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "+30 poder de habilidad Pasiva ÚNICA: +10% reducción de enfriamiento",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "colloq": "Fiendish Codex",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3174",
                "3092",
                "3115",
                "3165",
                "3102",
                "3157"
            ],
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "id": 3108,
            "name": "Códice diabólico"
        },
        "3109": {
            "from": [
                "3067",
                "1031"
            ],
            "description": "<stats>+400 de vida<br>+40 de armadura<br>+10% de reducción de enfriamiento</stats><br><br><active>Activa ÚNICA:</active> Escoge a un campeón aliado como tu <a href='KnightsVowPartner'>compañero</a> (90 s de enfriamiento).<br><passive>Pasiva ÚNICA:</passive> Si tu <a href='KnightsVowPartner'>compañero</a> está cerca, obtienes +20 de armadura adicional y +15% de velocidad de movimiento al moverte hacia él.<br><passive>Pasiva ÚNICA:</passive> Si tu <a href='KnightsVowPartner'>compañero</a> está cerca, te curas un 12% del daño que <a href='KnightsVowPartner'>tu compañero</a> inflige a los campeones y rediriges hacia ti un 12% del daño que tu <a href='KnightsVowPartner'>compañero</a> recibe de los campeones como daño <font color='#FFFFFF'>verdadero</font> (la curación y la redirección de daño se reducen un 50% si eres un campeón a distancia).<br><br><rules>(Los campeones solo pueden estar vinculados por una Promesa de caballero a la vez).</rules>",
            "gold": {
                "total": 2300,
                "sell": 1610,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Armor",
                "Aura",
                "CooldownReduction",
                "NonbootsMovement"
            ],
            "plaintext": "Asóciate con un aliado para protegeros el uno al otro.",
            "image": {
                "full": "3109.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "+400 de vida +40 de armadura +10% de reducción de enfriamiento Activa ÚNICA: Escoge a un campeón aliado como tu compañero (90 s de enfriamiento). Pasiva ÚNICA: Si tu compañero está cerca, obtienes +20 de armadura adicional y +15% de velocidad de movimiento al moverte hacia él. Pasiva ÚNICA: Si tu compañero está cerca, te curas un 12% del daño que tu compañero inflige a los campeones y rediriges hacia ti un 12% del daño que tu compañero recibe de los campeones como daño verdadero (la curación y la redirección de daño se reducen un 50% si eres un campeón a distancia). (Los campeones solo pueden estar vinculados por una Promesa de caballero a la vez).",
            "effect": {
                "Effect3Amount": "0.12",
                "Effect1Amount": "20",
                "Effect2Amount": "0.15",
                "Effect6Amount": "0.5",
                "Effect4Amount": "0.12",
                "Effect7Amount": "1000",
                "Effect5Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 40,
                "FlatHPPoolMod": 400
            },
            "id": 3109,
            "name": "Promesa de caballero"
        },
        "3110": {
            "from": [
                "3082",
                "3024"
            ],
            "description": "<stats>+90 armadura<br>+20% reducción de enfriamiento<br><mana>+400 maná</mana></stats><br><br><aura>Aura ÚNICA:</aura> Reduce un 15% la velocidad de ataque de los enemigos cercanos.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "Aura",
                "CooldownReduction",
                "Mana"
            ],
            "plaintext": "Aumenta considerablemente la armadura y ralentiza los ataques básicos del enemigo.",
            "image": {
                "full": "3110.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "+90 armadura +20% reducción de enfriamiento +400 maná Aura ÚNICA: Reduce un 15% la velocidad de ataque de los enemigos cercanos.",
            "effect": {
                "Effect1Amount": "-0.2",
                "Effect2Amount": "-0.15"
            },
            "colloq": "Frozen Heart;fh",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatArmorMod": 90
            },
            "id": 3110,
            "name": "Corazón de hielo"
        },
        "3111": {
            "from": [
                "1001",
                "1033"
            ],
            "description": "<stats>+25 resistencia mágica</stats><br><br><unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +45 de velocidad de movimiento<br><unique>Pasiva ÚNICA, Tenacidad:</unique> Reduce un 30% la duración de aturdimientos, ralentizaciones, provocaciones, miedo, silencio, ceguera, cambios de forma e inmovilizaciones.",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "SpellBlock",
                "Tenacity"
            ],
            "plaintext": "Aumenta la velocidad de movimiento y reduce la duración de los efectos incapacitantes.",
            "image": {
                "full": "3111.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "+25 resistencia mágica Pasiva ÚNICA, Movimiento mejorado: +45 de velocidad de movimiento Pasiva ÚNICA, Tenacidad: Reduce un 30% la duración de aturdimientos, ralentizaciones, provocaciones, miedo, silencio, ceguera, cambios de forma e inmovilizaciones.",
            "colloq": "Mercury's Treads",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45,
                "FlatSpellBlockMod": 25
            },
            "id": 3111,
            "name": "Botas de mercurio"
        },
        "3112": {
            "stats": {
                "FlatHPPoolMod": 150,
                "FlatMagicDamageMod": 35
            },
            "description": "<stats>+150 de vida<br>+35 de poder de habilidad<br><mana>+10 de regeneración de maná cada 5 s</mana></stats><br><br><groupLimit>Limitado a 1 objeto de guardián.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Mana",
                "Lane"
            ],
            "plaintext": "Buen objeto inicial para magos.",
            "image": {
                "full": "3112.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "+150 de vida +35 de poder de habilidad +10 de regeneración de maná cada 5 s Limitado a 1 objeto de guardián.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3112,
            "name": "Orbe del guardián"
        },
        "3113": {
            "from": [
                "1052"
            ],
            "description": "<stats>+30 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> +5% velocidad de movimiento",
            "gold": {
                "total": 850,
                "sell": 595,
                "base": 415,
                "purchasable": true
            },
            "tags": [
                "NonbootsMovement",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el poder de habilidad y la velocidad de movimiento.",
            "image": {
                "full": "3113.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "+30 poder de habilidad Pasiva ÚNICA: +5% velocidad de movimiento",
            "effect": {
                "Effect1Amount": "0.05"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1402",
                "1410",
                "1414",
                "3100",
                "3285",
                "3504",
                "3673"
            ],
            "stats": {
                "FlatMagicDamageMod": 30
            },
            "id": 3113,
            "name": "Brisa de éter"
        },
        "3114": {
            "from": [
                "1004",
                "1004"
            ],
            "description": "<stats><mana>+50% de regeneración de maná básico </mana></stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento<br><unique>Pasiva ÚNICA:</unique> +8% de curación y de escudo.",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "ManaRegen"
            ],
            "plaintext": "Aumenta la regeneración de maná y la reducción de enfriamiento.",
            "image": {
                "full": "3114.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "+50% de regeneración de maná básico Pasiva ÚNICA: +10% de reducción de enfriamiento Pasiva ÚNICA: +8% de curación y de escudo.",
            "effect": {
                "Effect1Amount": "-0.1",
                "Effect2Amount": "0.08"
            },
            "colloq": "Malady",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3107",
                "3222",
                "3504"
            ],
            "stats": {},
            "id": 3114,
            "name": "Ídolo prohibido"
        },
        "3115": {
            "from": [
                "3101",
                "3108"
            ],
            "description": "<stats>+50% velocidad de ataque<br>+80 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> +20% reducción de enfriamiento<br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen 15 (+15% de poder de habilidad) de daño mágico adicional.<br>",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "AttackSpeed",
                "CooldownReduction",
                "OnHit",
                "SpellDamage"
            ],
            "plaintext": "Aumenta la velocidad de ataque, el poder de habilidad y la reducción de enfriamiento.",
            "image": {
                "full": "3115.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "+50% velocidad de ataque +80 poder de habilidad Pasiva ÚNICA: +20% reducción de enfriamiento Pasiva ÚNICA: Los ataques básicos infligen 15 (+15% de poder de habilidad) de daño mágico adicional.",
            "colloq": "Nashor's Tooth",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 80,
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3115,
            "name": "Diente de Nashor"
        },
        "3116": {
            "from": [
                "1026",
                "1052",
                "1028"
            ],
            "description": "<stats>+300 de vida<br>+75 de poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> Los hechizos y habilidades de daño reducen la velocidad de movimiento del enemigo un 20% durante 1 s.",
            "gold": {
                "total": 2600,
                "sell": 1820,
                "base": 915,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Slow"
            ],
            "plaintext": "Las habilidades ralentizan a los enemigos.",
            "image": {
                "full": "3116.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "+300 de vida +75 de poder de habilidad Pasiva ÚNICA: Los hechizos y habilidades de daño reducen la velocidad de movimiento del enemigo un 20% durante 1 s.",
            "effect": {
                "Effect3Amount": "-0.2",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "-0.2",
                "Effect6Amount": "1",
                "Effect4Amount": "1",
                "Effect5Amount": "1"
            },
            "colloq": "Rylai's Crystal Scepter",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 75
            },
            "id": 3116,
            "name": "Cetro de cristal de Rylai"
        },
        "3117": {
            "from": [
                "1001"
            ],
            "description": "<unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +25 de velocidad de movimiento. Aumenta hasta +115 de velocidad de movimiento si no se entra en combate durante 5 s.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots"
            ],
            "plaintext": "Mejora en gran medida la velocidad de movimiento cuando no estás en combate.",
            "image": {
                "full": "3117.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "Pasiva ÚNICA, Movimiento mejorado: +25 de velocidad de movimiento. Aumenta hasta +115 de velocidad de movimiento si no se entra en combate durante 5 s.",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "0",
                "Effect4Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "25",
                "Effect5Amount": "0"
            },
            "colloq": "Boots of Mobility",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 115
            },
            "id": 3117,
            "name": "Botas de movilidad"
        },
        "3122": {
            "from": [
                "1051",
                "1036"
            ],
            "description": "<stats>+20 daño de ataque<br>+10% probabilidad de crítico</stats><br><br><unique>Pasiva ÚNICA:</unique> Los golpes críticos hacen sangrar al objetivo, lo que le inflige un 60% de tu daño de ataque adicional como daño mágico a lo largo de 3 s.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "CriticalStrike",
                "Damage",
                "OnHit"
            ],
            "plaintext": "Los golpes críticos provocan que el objetivo sangre.",
            "image": {
                "full": "3122.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "+20 daño de ataque +10% probabilidad de crítico Pasiva ÚNICA: Los golpes críticos hacen sangrar al objetivo, lo que le inflige un 60% de tu daño de ataque adicional como daño mágico a lo largo de 3 s.",
            "effect": {
                "Effect1Amount": "0.6",
                "Effect2Amount": "3"
            },
            "colloq": "ie",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3104",
                "3185"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatCritChanceMod": 0.1
            },
            "id": 3122,
            "name": "Hacha maligna"
        },
        "3123": {
            "from": [
                "1036"
            ],
            "description": "<stats>+15 daño de ataque</stats><br><br><unique>Pasiva ÚNICA, Verdugo:</unique> El daño físico inflige <a href='GrievousWounds'>Heridas Graves</a> a los campeones enemigos durante 3 s.",
            "gold": {
                "total": 800,
                "sell": 560,
                "base": 450,
                "purchasable": true
            },
            "tags": [
                "Damage"
            ],
            "plaintext": "Mayor eficacia contra enemigos que tengan mucha regeneración de vida.",
            "image": {
                "full": "3123.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "+15 daño de ataque Pasiva ÚNICA, Verdugo: El daño físico inflige Heridas Graves a los campeones enemigos durante 3 s.",
            "effect": {
                "Effect1Amount": "3"
            },
            "colloq": "grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3033"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 15
            },
            "id": 3123,
            "name": "Llamada del verdugo"
        },
        "3124": {
            "from": [
                "1026",
                "1043",
                "1037"
            ],
            "description": "<stats>+35 de daño de ataque<br>+50 de poder de habilidad<br>+25% de velocidad de ataque</stats><br><br><passive>Pasiva: </passive>Los ataques básicos infligen 15 de daño mágico al golpear.<br><unique>Pasiva ÚNICA:</unique> Los ataques básicos otorgan +8% de velocidad de ataque, +3 de daño de ataque y +4 de poder de habilidad durante 5 s (se acumula hasta 6 veces). Si tienes 6 acumulaciones, obtendrás <unlockedPassive>Ira de Guinsoo</unlockedPassive>.<br><br><unlockedPassive>Ira de Guinsoo:</unlockedPassive> Los ataques básicos activarán los efectos de impacto una segunda vez.",
            "gold": {
                "total": 3600,
                "sell": 2520,
                "base": 875,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "AttackSpeed",
                "SpellDamage",
                "OnHit"
            ],
            "plaintext": "Aumenta el poder de habilidad y el daño de ataque.",
            "image": {
                "full": "3124.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "+35 de daño de ataque +50 de poder de habilidad +25% de velocidad de ataque Pasiva: Los ataques básicos infligen 15 de daño mágico al golpear. Pasiva ÚNICA: Los ataques básicos otorgan +8% de velocidad de ataque, +3 de daño de ataque y +4 de poder de habilidad durante 5 s (se acumula hasta 6 veces). Si tienes 6 acumulaciones, obtendrás Ira de Guinsoo. Ira de Guinsoo: Los ataques básicos activarán los efectos de impacto una segunda vez.",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "0.08",
                "Effect2Amount": "4",
                "Effect6Amount": "0",
                "Effect9Amount": "1",
                "Effect4Amount": "5",
                "Effect7Amount": "0",
                "Effect8Amount": "15",
                "Effect5Amount": "6"
            },
            "colloq": "Guinsoo's Rageblade",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatMagicDamageMod": 50,
                "PercentAttackSpeedMod": 0.25
            },
            "id": 3124,
            "name": "Hoja de furia de Guinsoo"
        },
        "3133": {
            "from": [
                "1036",
                "1036"
            ],
            "description": "<stats>+25 daño de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "CooldownReduction"
            ],
            "plaintext": "Daño de ataque y reducción de enfriamiento.",
            "image": {
                "full": "3133.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+25 daño de ataque Pasiva ÚNICA: +10% de reducción de enfriamiento",
            "effect": {
                "Effect1Amount": "-0.1"
            },
            "stacks": 0,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3142",
                "1400",
                "3104",
                "1408",
                "1412",
                "3812",
                "3156",
                "3508",
                "3671"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "id": 3133,
            "name": "Martillo de guerra de Caulfield"
        },
        "3134": {
            "from": [
                "1036",
                "1036"
            ],
            "description": "<stats>+25 de daño de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> +10 de <a href='Lethality'>letalidad</a><br><unique>Pasiva ÚNICA:</unique> +20 de velocidad de movimiento fuera de combate",
            "gold": {
                "total": 1100,
                "sell": 770,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Aumenta el daño de ataque y la letalidad.",
            "image": {
                "full": "3134.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "+25 de daño de ataque Pasiva ÚNICA: +10 de letalidad Pasiva ÚNICA: +20 de velocidad de movimiento fuera de combate",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "10",
                "Effect3Amount": "20"
            },
            "stacks": 0,
            "colloq": "letalidad",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3142",
                "3814",
                "3147"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25
            },
            "id": 3134,
            "name": "Daga dentada"
        },
        "3135": {
            "from": [
                "1026",
                "1052"
            ],
            "description": "<stats>+80 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> +35% <a href='TotalMagicPen'>de penetración mágica</a>.",
            "gold": {
                "total": 2650,
                "sell": 1855,
                "base": 1365,
                "purchasable": true
            },
            "tags": [
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el daño mágico.",
            "image": {
                "full": "3135.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "+80 poder de habilidad Pasiva ÚNICA: +35% de penetración mágica.",
            "effect": {
                "Effect1Amount": "0.35"
            },
            "colloq": "Void Staff",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMagicDamageMod": 80
            },
            "id": 3135,
            "name": "Bastón del Vacío"
        },
        "3136": {
            "from": [
                "1028",
                "1052"
            ],
            "description": "<stats>+25 poder de habilidad<br>+200 vida</stats><br><br><unique>Pasiva ÚNICA, Ojos de Dolor:</unique> +15<a href='FlatMagicPen'> de penetración mágica.</a>",
            "gold": {
                "total": 1500,
                "sell": 1050,
                "base": 665,
                "purchasable": true
            },
            "tags": [
                "Health",
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "Aumenta el daño mágico.",
            "image": {
                "full": "3136.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "+25 poder de habilidad +200 vida Pasiva ÚNICA, Ojos de Dolor: +15 de penetración mágica.",
            "effect": {
                "Effect1Amount": "15"
            },
            "stacks": 0,
            "colloq": "máscara",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3151"
            ],
            "stats": {
                "FlatHPPoolMod": 200,
                "FlatMagicDamageMod": 25
            },
            "id": 3136,
            "name": "Disfraz encantado"
        },
        "3137": {
            "from": [
                "3140",
                "3101"
            ],
            "description": "<stats>+50% velocidad de ataque<br>+45 resistencia mágica<br>+10% reducción de enfriamiento</stats><br><br><active>Activa ÚNICA, Mercurio:</active> Elimina todas las debilitaciones y, si el campeón es cuerpo a cuerpo, este objeto también otorga +50% de velocidad de movimiento adicional durante 1 s (90 s de enfriamiento).",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "Active",
                "AttackSpeed",
                "CooldownReduction",
                "NonbootsMovement",
                "SpellBlock"
            ],
            "plaintext": "Puede activarse para quitar todas las debilitaciones y ganar una enorme cantidad de velocidad de movimiento.",
            "image": {
                "full": "3137.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+50% velocidad de ataque +45 resistencia mágica +10% reducción de enfriamiento Activa ÚNICA, Mercurio: Elimina todas las debilitaciones y, si el campeón es cuerpo a cuerpo, este objeto también otorga +50% de velocidad de movimiento adicional durante 1 s (90 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 45,
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3137,
            "name": "Hoja de pupilo"
        },
        "3139": {
            "from": [
                "3140",
                "1037",
                "1053"
            ],
            "description": "<stats>+65 de daño de ataque<br>+35 de resistencia mágica<br>+10% de robo de vida</stats><br><br><active>Activa ÚNICA, Mercurio:</active> Elimina todas las debilitaciones de control de adversario y otorga +50% de velocidad de movimiento durante 1 s (90 s de enfriamiento).",
            "gold": {
                "total": 3600,
                "sell": 2520,
                "base": 525,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "Active",
                "NonbootsMovement"
            ],
            "plaintext": "Puede activarse para quitar todas las debilitaciones de control de adversario y ganar una enorme cantidad de velocidad de movimiento.",
            "image": {
                "full": "3139.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "+65 de daño de ataque +35 de resistencia mágica +10% de robo de vida Activa ÚNICA, Mercurio: Elimina todas las debilitaciones de control de adversario y otorga +50% de velocidad de movimiento durante 1 s (90 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "1",
                "Effect3Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 65,
                "PercentLifeStealMod": 0.1
            },
            "id": 3139,
            "name": "Cimitarra mercurial"
        },
        "3140": {
            "from": [
                "1033"
            ],
            "description": "<stats>+30 de resistencia mágica</stats><br><br><active>Activa ÚNICA, Mercurio:</active> Elimina todas las debilitaciones de control de adversario (90 s de enfriamiento).",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Active",
                "SpellBlock"
            ],
            "plaintext": "Puede activarse para eliminar todas las debilitaciones de control de adversario.",
            "image": {
                "full": "3140.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "+30 de resistencia mágica Activa ÚNICA, Mercurio: Elimina todas las debilitaciones de control de adversario (90 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "90"
            },
            "colloq": "Quicksilver Sash;qss",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3139",
                "3137"
            ],
            "stats": {
                "FlatSpellBlockMod": 30
            },
            "id": 3140,
            "name": "Fajín de mercurio"
        },
        "3142": {
            "from": [
                "3133",
                "3134"
            ],
            "description": "<stats>+60 de daño de ataque<br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA:</unique> +15 de <a href='Lethality'>letalidad</a><br><unique>Pasiva ÚNICA:</unique> +20 de velocidad de movimiento fuera de combate<br><active>Activa ÚNICA:</active> Otorga +20% de velocidad de movimiento durante 6 s (45 s de enfriamiento).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "Active",
                "CooldownReduction",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Puede activarse para aumentar en gran medida la velocidad de movimiento.",
            "image": {
                "full": "3142.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "+60 de daño de ataque +10% de reducción de enfriamiento Pasiva ÚNICA: +15 de letalidad Pasiva ÚNICA: +20 de velocidad de movimiento fuera de combate Activa ÚNICA: Otorga +20% de velocidad de movimiento durante 6 s (45 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "0.2",
                "Effect1Amount": "45",
                "Effect2Amount": "15",
                "Effect6Amount": "20",
                "Effect4Amount": "0",
                "Effect5Amount": "6"
            },
            "colloq": "letalidad",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 3142,
            "name": "Filo fantasmal de Youmuu"
        },
        "3143": {
            "from": [
                "1028",
                "3082",
                "1028"
            ],
            "description": "<stats>+350 de vida<br>+60 de armadura</stats><br><br><unique>Pasiva ÚNICA:</unique> -20% de daño recibido de golpes críticos de ataques básicos.<br><unique>Pasiva ÚNICA - Acero frío:</unique> Si te alcanza un ataque básico, reduces un 15% la velocidad de ataque del atacante durante 1 s.<br><active>Activa ÚNICA:</active> Reduce un 55% la velocidad de movimiento de las unidades enemigas cercanas durante 2 s (60 s de enfriamiento).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "Health",
                "Slow"
            ],
            "plaintext": "Aumenta notablemente las defensas; puede activarse para ralentizar a los enemigos cercanos.",
            "image": {
                "full": "3143.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 96
            },
            "sanitizedDescription": "+350 de vida +60 de armadura Pasiva ÚNICA: -20% de daño recibido de golpes críticos de ataques básicos. Pasiva ÚNICA - Acero frío: Si te alcanza un ataque básico, reduces un 15% la velocidad de ataque del atacante durante 1 s. Activa ÚNICA: Reduce un 55% la velocidad de movimiento de las unidades enemigas cercanas durante 2 s (60 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "-0.55",
                "Effect1Amount": "2",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0.15",
                "Effect4Amount": "1",
                "Effect7Amount": "0.3",
                "Effect5Amount": "-0.15"
            },
            "colloq": "Randuin's Omen",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 350
            },
            "id": 3143,
            "name": "Presagio de Randuin"
        },
        "3144": {
            "from": [
                "1053",
                "1036"
            ],
            "description": "<stats>+25 daño de ataque<br>+10% robo de vida</stats><br><br><active>Activa ÚNICA:</active> Inflige 100 de daño mágico y reduce un 25% la velocidad de movimiento del campeón objetivo durante 2 s (90 s de enfriamiento).",
            "gold": {
                "total": 1500,
                "sell": 1050,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "LifeSteal",
                "Slow"
            ],
            "plaintext": "Puede activarse para causar daño mágico y ralentizar al campeón objetivo.",
            "image": {
                "full": "3144.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 144
            },
            "sanitizedDescription": "+25 daño de ataque +10% robo de vida Activa ÚNICA: Inflige 100 de daño mágico y reduce un 25% la velocidad de movimiento del campeón objetivo durante 2 s (90 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "-0.25",
                "Effect2Amount": "2",
                "Effect3Amount": "90",
                "Effect4Amount": "100"
            },
            "colloq": "Bilgewater Cutlass",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "into": [
                "3146",
                "3153"
            ],
            "stats": {
                "FlatPhysicalDamageMod": 25,
                "PercentLifeStealMod": 0.1
            },
            "id": 3144,
            "name": "Sable de Aguas Estancadas"
        },
        "3145": {
            "from": [
                "1052",
                "1052"
            ],
            "description": "<stats>+40 de poder de habilidad</stats><br><br><unique>Pasiva ÚNICA - Proyectil mágico:</unique> Infligir daño a un campeón enemigo con ataques básicos causa <scaleLevel>50-125</scaleLevel> de daño mágico adicional (40 s de enfriamiento, se comparte con otros objetos <font color='#9999FF'><a href='itembolt'>hextech</a></font>).<br><br>El enfriamiento de Proyectil mágico se reduce por la reducción de enfriamiento del objeto activo.<br><br><rules>(El daño aumenta según el nivel. Los efectos hextech pueden activar efectos de hechizo de otros objetos).</rules>",
            "gold": {
                "total": 1050,
                "sell": 735,
                "base": 180,
                "purchasable": true
            },
            "tags": [
                "SpellDamage"
            ],
            "plaintext": "Aumenta el poder de habilidad. Inflige daño mágico adicional con ataques periódicos.",
            "image": {
                "full": "3145.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 192
            },
            "sanitizedDescription": "+40 de poder de habilidad Pasiva ÚNICA - Proyectil mágico: Infligir daño a un campeón enemigo con ataques básicos causa 50-125 de daño mágico adicional (40 s de enfriamiento, se comparte con otros objetos hextech). El enfriamiento de Proyectil mágico se reduce por la reducción de enfriamiento del objeto activo. (El daño aumenta según el nivel. Los efectos hextech pueden activar efectos de hechizo de otros objetos).",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "50",
                "Effect3Amount": "0",
                "Effect4Amount": "125",
                "Effect5Amount": "40"
            },
            "colloq": "Hextech Revolver",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3146",
                "3152",
                "3030"
            ],
            "stats": {
                "FlatMagicDamageMod": 40
            },
            "id": 3145,
            "name": "Revólver hextech"
        },
        "3146": {
            "from": [
                "3144",
                "3145"
            ],
            "description": "<stats>+40 de daño de ataque<br>+80 de poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> Cura un 15% del daño infligido. La efectividad es del 33% para los ataques con efecto en área.<br><active>Activa ÚNICA - Proyectil fugaz:</active> Inflige <scaleLevel>175-250</scaleLevel> (+30% de poder de habilidad) de daño mágico y ralentiza un 40% la velocidad de movimiento del campeón objetivo durante 2 s (40 s de enfriamiento, se comparte con otros objetos <font color='#9999FF'><a href='itembolt'>hextech</a></font>).",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Damage",
                "LifeSteal",
                "Slow",
                "SpellDamage",
                "SpellVamp"
            ],
            "plaintext": "Aumenta el daño de ataque y el poder de habilidad; se puede activar para ralentizar a un objetivo.",
            "image": {
                "full": "3146.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 240
            },
            "sanitizedDescription": "+40 de daño de ataque +80 de poder de habilidad Pasiva ÚNICA: Cura un 15% del daño infligido. La efectividad es del 33% para los ataques con efecto en área. Activa ÚNICA - Proyectil fugaz: Inflige 175-250 (+30% de poder de habilidad) de daño mágico y ralentiza un 40% la velocidad de movimiento del campeón objetivo durante 2 s (40 s de enfriamiento, se comparte con otros objetos hextech).",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "40",
                "Effect3Amount": "175",
                "Effect4Amount": "250"
            },
            "colloq": "Hextech Gunblade",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "FlatMagicDamageMod": 80
            },
            "id": 3146,
            "name": "Sable-pistola hextech"
        },
        "3147": {
            "from": [
                "3134",
                "1038"
            ],
            "description": "<stats>+65 de daño de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> +15 <a href='Lethality'>de letalidad</a><br><unique>Pasiva ÚNICA:</unique> +20 de velocidad de movimiento fuera de combate.<br><unique>Pasiva ÚNICA - Acechador nocturno:</unique> Después de no ser visto durante al menos 1 s, el siguiente ataque básico infligirá 75 (+200% de letalidad) de daño verdadero al golpear (durante 4 s después de que un campeón enemigo te haya visto).<br><unique>Pasiva ÚNICA - Apagón:</unique> Cuando te detecta un guardián enemigo, causa un apagón durante 8 s, lo que revela las trampas invisibles y revela/desactiva los guardianes (90 s de enfriamiento).",
            "gold": {
                "total": 3250,
                "sell": 2275,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "OnHit",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Inflige daño verdadero adicional al golpear y otorga visión verdadera cada cierto tiempo.",
            "image": {
                "full": "3147.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 288
            },
            "sanitizedDescription": "+65 de daño de ataque Pasiva ÚNICA: +15 de letalidad Pasiva ÚNICA: +20 de velocidad de movimiento fuera de combate. Pasiva ÚNICA - Acechador nocturno: Después de no ser visto durante al menos 1 s, el siguiente ataque básico infligirá 75 (+200% de letalidad) de daño verdadero al golpear (durante 4 s después de que un campeón enemigo te haya visto). Pasiva ÚNICA - Apagón: Cuando te detecta un guardián enemigo, causa un apagón durante 8 s, lo que revela las trampas invisibles y revela/desactiva los guardianes (90 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "15",
                "Effect2Amount": "20",
                "Effect6Amount": "2",
                "Effect4Amount": "90",
                "Effect5Amount": "75"
            },
            "colloq": "letalidad",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 65
            },
            "id": 3147,
            "name": "Filoscuro de Draktharr"
        },
        "3151": {
            "from": [
                "3136",
                "1026"
            ],
            "description": "<stats>+80 poder de habilidad<br>+300 vida</stats><br><br><unique>Pasiva ÚNICA, Ojos de Dolor:</unique> +15 de<a href='FlatMagicPen'> penetración mágica</a><br><unique>Pasiva ÚNICA:</unique> Los hechizos queman a los enemigos durante 3 s. Les infligen cada segundo un daño mágico adicional equivalente al 2% de su vida actual. El daño de quemaduras se dobla contra unidades con el <a href='MovementImpaired'>movimiento impedido</a>.",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Health",
                "MagicPenetration",
                "SpellDamage"
            ],
            "plaintext": "El daño de hechizos quema una porción de la vida de los enemigos.",
            "image": {
                "full": "3151.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 336
            },
            "sanitizedDescription": "+80 poder de habilidad +300 vida Pasiva ÚNICA, Ojos de Dolor: +15 de penetración mágica Pasiva ÚNICA: Los hechizos queman a los enemigos durante 3 s. Les infligen cada segundo un daño mágico adicional equivalente al 2% de su vida actual. El daño de quemaduras se dobla contra unidades con el movimiento impedido.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "0.02",
                "Effect3Amount": "3",
                "Effect4Amount": "100",
                "Effect5Amount": "2"
            },
            "stacks": 0,
            "colloq": "máscara",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 80
            },
            "id": 3151,
            "name": "Tormento de Liandry"
        },
        "3152": {
            "from": [
                "3145",
                "3067"
            ],
            "description": "<stats>+300 de vida<br>+60 de poder de habilidad<br>+10% de reducción de enfriamiento</stats><br><br><unique>Activa ÚNICA - Proyectil ígneo:</unique> Te desplazas hacia delante y lanzas un anillo de proyectiles ígneos que infligen <scaleLevel>75-150</scaleLevel> (+25% de tu poder de habilidad) como daño mágico (40 s de enfriamiento, se comparte con otros objetos <font color='#9999FF'><a href='itembolt'>hextech</a></font>).<br><br>Los campeones y monstruos golpeados por varios proyectiles ígneos sufren un 10% de daño por cada proyectil adicional.<br><br><rules>(El desplazamiento no permite atravesar el terreno).</rules>",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellDamage",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Puede activarse para desplazarse hacia delante y desencadenar una explosión ardiente.",
            "image": {
                "full": "3152.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 384
            },
            "sanitizedDescription": "+300 de vida +60 de poder de habilidad +10% de reducción de enfriamiento Activa ÚNICA - Proyectil ígneo: Te desplazas hacia delante y lanzas un anillo de proyectiles ígneos que infligen 75-150 (+25% de tu poder de habilidad) como daño mágico (40 s de enfriamiento, se comparte con otros objetos hextech). Los campeones y monstruos golpeados por varios proyectiles ígneos sufren un 10% de daño por cada proyectil adicional. (El desplazamiento no permite atravesar el terreno).",
            "effect": {
                "Effect3Amount": "40",
                "Effect1Amount": "0.12",
                "Effect2Amount": "0.04",
                "Effect6Amount": "0.1",
                "Effect9Amount": "0.5",
                "Effect4Amount": "75",
                "Effect7Amount": "0.25",
                "Effect8Amount": "40",
                "Effect5Amount": "150"
            },
            "colloq": "rocket belt;",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 300,
                "FlatMagicDamageMod": 60
            },
            "id": 3152,
            "name": "Protocinturón hextech-01"
        },
        "3153": {
            "from": [
                "3144",
                "1043"
            ],
            "description": "<stats>+40 de daño de ataque<br>+25% de velocidad de ataque<br>+12% de robo de vida</stats><br><br><unique>Pasiva ÚNICA:</unique> Al golpear, los ataques básicos infligen un 8% de la vida actual del objetivo como daño físico adicional.<br><active>Activa ÚNICA:</active> Inflige 100 de daño mágico al campeón objetivo y le roba un 25% de la velocidad de movimiento durante 3 s (90 s de enfriamiento).<br><br><font size='14' color='#8c8c8c'>El daño adicional mínimo infligido es 15.<br>El daño adicional máximo infligido a monstruos y súbditos es 60.<br>El robo de vida se aplica al daño adicional infligido.</font>",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 900,
                "purchasable": true
            },
            "tags": [
                "Active",
                "AttackSpeed",
                "Damage",
                "LifeSteal",
                "NonbootsMovement",
                "OnHit"
            ],
            "plaintext": "Inflige daño según la vida del objetivo; puede robar velocidad de movimiento.",
            "image": {
                "full": "3153.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 432
            },
            "sanitizedDescription": "+40 de daño de ataque +25% de velocidad de ataque +12% de robo de vida Pasiva ÚNICA: Al golpear, los ataques básicos infligen un 8% de la vida actual del objetivo como daño físico adicional. Activa ÚNICA: Inflige 100 de daño mágico al campeón objetivo y le roba un 25% de la velocidad de movimiento durante 3 s (90 s de enfriamiento). El daño adicional mínimo infligido es 15. El daño adicional máximo infligido a monstruos y súbditos es 60. El robo de vida se aplica al daño adicional infligido.",
            "effect": {
                "Effect1Amount": "0.08"
            },
            "colloq": "brk;bork;botrk",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "stats": {
                "FlatPhysicalDamageMod": 40,
                "PercentAttackSpeedMod": 0.25,
                "PercentLifeStealMod": 0.12
            },
            "id": 3153,
            "name": "Hoja del rey arruinado"
        },
        "3155": {
            "from": [
                "1036",
                "1033"
            ],
            "description": "<stats>+20 daño de ataque<br>+35 resistencia mágica</stats><br><br><unique>Pasiva ÚNICA, Salvavidas:</unique> Al recibir daño mágico que reduzca la vida por debajo del 30%, otorga un escudo que absorbe de 110 a 280 puntos de daño mágico durante 5 s (90 s de enfriamiento).",
            "gold": {
                "total": 1300,
                "sell": 910,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "SpellBlock"
            ],
            "plaintext": "Aumenta el daño de ataque y la resistencia mágica.",
            "image": {
                "full": "3155.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 0
            },
            "sanitizedDescription": "+20 daño de ataque +35 resistencia mágica Pasiva ÚNICA, Salvavidas: Al recibir daño mágico que reduzca la vida por debajo del 30%, otorga un escudo que absorbe de 110 a 280 puntos de daño mágico durante 5 s (90 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "0.3",
                "Effect2Amount": "110",
                "Effect6Amount": "100",
                "Effect4Amount": "90",
                "Effect7Amount": "10",
                "Effect5Amount": "280"
            },
            "stacks": 0,
            "colloq": "Hexdrinker",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3156"
            ],
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 20
            },
            "id": 3155,
            "name": "Sorbemaleficios"
        },
        "3156": {
            "from": [
                "3155",
                "3133"
            ],
            "description": "<stats>+50 de daño de ataque<br>+45 de resistencia mágica<br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA, Salvavidas:</unique> Al recibir daño mágico que reduzca la vida por debajo del 30%, otorga un escudo que absorbe 300 + 1 por resistencia mágica adicional durante 5 s (90 s de enfriamiento).<br><unlockedPassive>Agarre a la vida:</unlockedPassive> Cuando se activa <i>Salvavidas</i>, obtienes +20 de daño de ataque, +10% de succión de hechizo y +10% de robo de vida hasta el final del combate.",
            "gold": {
                "total": 3250,
                "sell": 2275,
                "base": 850,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "LifeSteal",
                "CooldownReduction",
                "SpellVamp"
            ],
            "plaintext": "Otorga daño de ataque adicional cuando tienes poca vida.",
            "image": {
                "full": "3156.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 48
            },
            "sanitizedDescription": "+50 de daño de ataque +45 de resistencia mágica +10% de reducción de enfriamiento Pasiva ÚNICA, Salvavidas: Al recibir daño mágico que reduzca la vida por debajo del 30%, otorga un escudo que absorbe 300 + 1 por resistencia mágica adicional durante 5 s (90 s de enfriamiento). Agarre a la vida: Cuando se activa Salvavidas, obtienes +20 de daño de ataque, +10% de succión de hechizo y +10% de robo de vida hasta el final del combate.",
            "effect": {
                "Effect3Amount": "0.3",
                "Effect1Amount": "1",
                "Effect2Amount": "35",
                "Effect6Amount": "90",
                "Effect9Amount": "0.1",
                "Effect4Amount": "300",
                "Effect7Amount": "20",
                "Effect8Amount": "0",
                "Effect10Amount": "0.1",
                "Effect5Amount": "5"
            },
            "stacks": 0,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 45,
                "FlatPhysicalDamageMod": 50
            },
            "id": 3156,
            "name": "Fauces de Malmortius"
        },
        "3157": {
            "from": [
                "3191",
                "3108"
            ],
            "description": "<stats>+70 de poder de habilidad<br>+45 de armadura<br>+10% de reducción de enfriamiento</stats><br><br><active>Activa ÚNICA, Estasis:</active> El campeón será invulnerable e inalcanzable durante 2.5 s, pero tampoco podrá moverse, atacar, lanzar hechizos o usar objetos durante ese tiempo (120 s de enfriamiento).",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 800,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellDamage",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Puede activarse para hacerte invencible, aunque no podrás realizar acciones.",
            "image": {
                "full": "3157.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 96
            },
            "sanitizedDescription": "+70 de poder de habilidad +45 de armadura +10% de reducción de enfriamiento Activa ÚNICA, Estasis: El campeón será invulnerable e inalcanzable durante 2.5 s, pero tampoco podrá moverse, atacar, lanzar hechizos o usar objetos durante ese tiempo (120 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "0",
                "Effect2Amount": "2.5",
                "Effect3Amount": "120"
            },
            "colloq": "raz;zhonya",
            "maps": {
                "8": true,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 45,
                "FlatMagicDamageMod": 70
            },
            "id": 3157,
            "name": "Reloj de arena de Zhonya"
        },
        "3158": {
            "from": [
                "1001"
            ],
            "description": "<unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento<br><unique>Pasiva ÚNICA, Movimiento mejorado:</unique> +45 de velocidad de movimiento<br><unique>Pasiva ÚNICA:</unique> Reduce un 10% los enfriamientos de hechizos de invocador.<br><br><br><rules><font color='#FDD017'>''Este objeto está dedicado a la victoria de Jonia sobre Noxus en la revancha por las provincias meridionales del 10 de diciembre del 20 CLE''.</font></rules>",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 600,
                "purchasable": true
            },
            "tags": [
                "Boots",
                "CooldownReduction"
            ],
            "plaintext": "Aumenta la velocidad de movimiento y la reducción de enfriamiento.",
            "image": {
                "full": "3158.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 144
            },
            "sanitizedDescription": "Pasiva ÚNICA: +10% de reducción de enfriamiento Pasiva ÚNICA, Movimiento mejorado: +45 de velocidad de movimiento Pasiva ÚNICA: Reduce un 10% los enfriamientos de hechizos de invocador. ''Este objeto está dedicado a la victoria de Jonia sobre Noxus en la revancha por las provincias meridionales del 10 de diciembre del 20 CLE''.",
            "effect": {
                "Effect1Amount": "-0.1",
                "Effect2Amount": "0.1"
            },
            "colloq": "Ionian Boots of Lucidity",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatMovementSpeedMod": 45
            },
            "id": 3158,
            "name": "Botas jonias de la lucidez"
        },
        "3165": {
            "from": [
                "3108",
                "1052",
                "3802"
            ],
            "description": "<stats>+100 de poder de habilidad<br><mana>+400 de maná</mana></stats><br><br><unique>Pasiva ÚNICA:</unique> +20% de reducción de enfriamiento<br><unique>Pasiva ÚNICA:</unique> Infligir daño mágico a los campeones con menos del 35% de vida causa <a href='GrievousWounds'>Heridas graves</a> durante 8 s.<br><unique>Pasiva ÚNICA:</unique> Los asesinatos y las ayudas recuperan un 20% del maná máximo.",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 665,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Aumenta notablemente el poder de habilidad y la reducción de enfriamiento.",
            "image": {
                "full": "3165.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 192
            },
            "sanitizedDescription": "+100 de poder de habilidad +400 de maná Pasiva ÚNICA: +20% de reducción de enfriamiento Pasiva ÚNICA: Infligir daño mágico a los campeones con menos del 35% de vida causa Heridas graves durante 8 s. Pasiva ÚNICA: Los asesinatos y las ayudas recuperan un 20% del maná máximo.",
            "effect": {
                "Effect1Amount": "20",
                "Effect2Amount": "35",
                "Effect3Amount": "8",
                "Effect4Amount": "0.2"
            },
            "colloq": "nmst;grievous",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 400,
                "FlatMagicDamageMod": 100
            },
            "id": 3165,
            "name": "Morellonomicón"
        },
        "3170": {
            "from": [
                "3191",
                "1057"
            ],
            "description": "<stats>+50 poder de habilidad<br>+50 armadura<br>+50 resistencia mágica</stats><br><br><unique>Pasiva ÚNICA, Tenacidad:</unique> Reduce un 35% la duración de aturdimientos, ralentizaciones, provocaciones, miedo, silencio, ceguera, cambios de forma e inmovilizaciones.",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 580,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellBlock",
                "SpellDamage",
                "Tenacity"
            ],
            "plaintext": "Mejora la defensa y reduce la duración de los efectos incapacitantes.",
            "image": {
                "full": "3170.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 240
            },
            "sanitizedDescription": "+50 poder de habilidad +50 armadura +50 resistencia mágica Pasiva ÚNICA, Tenacidad: Reduce un 35% la duración de aturdimientos, ralentizaciones, provocaciones, miedo, silencio, ceguera, cambios de forma e inmovilizaciones.",
            "colloq": "Moonflair Spellblade",
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 50,
                "FlatArmorMod": 50,
                "FlatMagicDamageMod": 50
            },
            "id": 3170,
            "name": "Hoja encantada por la luna"
        },
        "3174": {
            "from": [
                "3108",
                "3028"
            ],
            "description": "<stats>+30 de poder de habilidad<br>+30 de resistencia mágica<br>+10% de reducción de enfriamiento<br><mana>+100% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA:</unique> Obtiene 25% del daño <a href='premitigation'><font color='#6666FF'><u>premitigado</u></font></a> infligido a campeones como cargas de sangre, hasta un máximo de <scaleLevel>100-250</scaleLevel>. Curar o ponerle un escudo a otro aliado consume cargas por un valor igual al 100% del valor de la curación o del escudo, y cura al aliado la misma cantidad.<br><unique>Pasiva ÚNICA - Disonancia:</unique> Otorga 5 de poder de habilidad por cada 25% de regeneración de maná básica que tengas. Desactiva <unique>Armonía</unique> de tus otros objetos.<br><br><rules>(La cantidad máxima de cargas de sangre almacenadas depende del nivel. La mejora de la curación se aplica sobre el valor total de curación.)</rules>",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 400,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "SpellDamage",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Inflige daño para potenciar tus curaciones y escudos.",
            "image": {
                "full": "3174.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 288
            },
            "sanitizedDescription": "+30 de poder de habilidad +30 de resistencia mágica +10% de reducción de enfriamiento +100% de regeneración de maná básica Pasiva ÚNICA: Obtiene 25% del daño premitigado infligido a campeones como cargas de sangre, hasta un máximo de 100-250. Curar o ponerle un escudo a otro aliado consume cargas por un valor igual al 100% del valor de la curación o del escudo, y cura al aliado la misma cantidad. Pasiva ÚNICA - Disonancia: Otorga 5 de poder de habilidad por cada 25% de regeneración de maná básica que tengas. Desactiva Armonía de tus otros objetos. (La cantidad máxima de cargas de sangre almacenadas depende del nivel. La mejora de la curación se aplica sobre el valor total de curación.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "10",
                "Effect2Amount": "0",
                "Effect14Amount": "90",
                "Effect12Amount": "600",
                "Effect9Amount": "1",
                "Effect11Amount": "0.25",
                "Effect4Amount": "0",
                "Effect6Amount": "0.25",
                "Effect7Amount": "100",
                "Effect8Amount": "250",
                "Effect13Amount": "8",
                "Effect10Amount": "1",
                "Effect5Amount": "5"
            },
            "colloq": "Athene's Unholy Grail",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 30,
                "FlatMagicDamageMod": 30
            },
            "id": 3174,
            "name": "Grial impuro de Athene"
        },
        "3175": {
            "stats": {},
            "description": "<unique>Activa ÚNICA, Tótem de Marfil:</unique> Coloca un Guardián invisible que dura 180 s (90 s de enfriamiento). Límite de 3 Guardianes invisibles en el mapa por jugador.<br><br><unique>Pasiva ÚNICA, Recuerdos de Caza:</unique> Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo<br><br><passive>3 trofeos:</passive> Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza .<br><passive>6 trofeos:</passive> El alcance del Salto de Rengar aumenta en 125.<br><passive>12 trofeos:</passive> La duración de Emoción por la cacería aumenta 5 s.<br><passive>20 trofeos:</passive> Rengar obtiene la mejora de velocidad de movimiento de Emoción por la cacería cuando está en sigilo.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3175.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 336
            },
            "sanitizedDescription": "Activa ÚNICA, Tótem de Marfil: Coloca un Guardián invisible que dura 180 s (90 s de enfriamiento). Límite de 3 Guardianes invisibles en el mapa por jugador. Pasiva ÚNICA, Recuerdos de Caza: Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo 3 trofeos: Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza . 6 trofeos: El alcance del Salto de Rengar aumenta en 125. 12 trofeos: La duración de Emoción por la cacería aumenta 5 s. 20 trofeos: Rengar obtiene la mejora de velocidad de movimiento de Emoción por la cacería cuando está en sigilo.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5",
                "Effect4Amount": "180",
                "Effect5Amount": "90"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3175,
            "name": "Cabeza de Kha'Zix"
        },
        "3181": {
            "from": [
                "1037",
                "1053"
            ],
            "description": "<stats>+45 daño de ataque<br>+10% robo de vida</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos que alcanzan al objetivo infligen +6 de daño de ataque y +1% de robo de vida durante 8 s (con un máximo de 5 acumulaciones).",
            "gold": {
                "total": 2400,
                "sell": 1680,
                "base": 625,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal"
            ],
            "plaintext": "Aumenta notablemente el daño de ataque y el robo de vida.",
            "image": {
                "full": "3181.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 384
            },
            "sanitizedDescription": "+45 daño de ataque +10% robo de vida Pasiva ÚNICA: Los ataques básicos que alcanzan al objetivo infligen +6 de daño de ataque y +1% de robo de vida durante 8 s (con un máximo de 5 acumulaciones).",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "0.01",
                "Effect3Amount": "8",
                "Effect4Amount": "5"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 45,
                "PercentLifeStealMod": 0.1
            },
            "id": 3181,
            "name": "Hoja carmesí"
        },
        "3184": {
            "stats": {
                "FlatPhysicalDamageMod": 20,
                "FlatHPPoolMod": 150,
                "PercentLifeStealMod": 0.1
            },
            "description": "<stats>+150 de vida<br>+20 de daño de ataque<br>+10% de robo de vida</stats><br><br><groupLimit>Limitado a 1 objeto de guardián.</groupLimit>",
            "gold": {
                "total": 950,
                "sell": 380,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Damage",
                "LifeSteal",
                "Lane"
            ],
            "plaintext": "Buen objeto inicial para atacantes.",
            "image": {
                "full": "3184.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 288,
                "x": 432
            },
            "sanitizedDescription": "+150 de vida +20 de daño de ataque +10% de robo de vida Limitado a 1 objeto de guardián.",
            "colloq": "despada",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3184,
            "name": "Martillo del guardián"
        },
        "3185": {
            "from": [
                "3122",
                "1018"
            ],
            "description": "<stats>+30 daño de ataque<br>+30% probabilidad de crítico</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques críticos provocan una hemorragia que inflige el 90% de tu daño de ataque adicional como daño mágico a lo largo de 3 s y revela su posición mientras dure el efecto.<br><unique>Pasiva ÚNICA, Detección de Trampas:</unique> Revela las trampas enemigas cercanas.<br><active>Activa ÚNICA, Vista de Cazador:</active> Una niebla detectora de sigilo concede visión del área objetivo durante 5 s y revela durante 3 s a los campeones enemigos que entren en ella (60 s de enfriamiento).",
            "gold": {
                "total": 2350,
                "sell": 1645,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "CriticalStrike",
                "Damage",
                "OnHit",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Los golpes críticos provocan que el objetivo sangre y además revelan su posición.",
            "image": {
                "full": "3185.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 0
            },
            "sanitizedDescription": "+30 daño de ataque +30% probabilidad de crítico Pasiva ÚNICA: Los ataques críticos provocan una hemorragia que inflige el 90% de tu daño de ataque adicional como daño mágico a lo largo de 3 s y revela su posición mientras dure el efecto. Pasiva ÚNICA, Detección de Trampas: Revela las trampas enemigas cercanas. Activa ÚNICA, Vista de Cazador: Una niebla detectora de sigilo concede visión del área objetivo durante 5 s y revela durante 3 s a los campeones enemigos que entren en ella (60 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.9",
                "Effect2Amount": "3",
                "Effect6Amount": "60",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "colloq": "lb",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 30,
                "FlatCritChanceMod": 0.3
            },
            "id": 3185,
            "name": "El portador de la luz"
        },
        "3187": {
            "from": [
                "3024",
                "3067"
            ],
            "description": "<stats>+225 de vida<br>+250 de maná<br>+25 de armadura<br>+20% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA, Detección de Trampas:</unique> Otorga <font color='#ee91d7'>visión verdadera</font> de las trampas enemigas cercanas.<br><active>Activa ÚNICA, Vista de Cazador:</active> Una niebla arcana concede visión de una zona específica durante 5 s y revela durante 3 s a los campeones enemigos que entren en ella (60 s de enfriamiento).",
            "gold": {
                "total": 2050,
                "sell": 1435,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Armor",
                "CooldownReduction",
                "Health",
                "Mana",
                "Stealth",
                "Vision"
            ],
            "plaintext": "Al activarse, revela una zona cercana del mapa.",
            "image": {
                "full": "3187.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 48
            },
            "sanitizedDescription": "+225 de vida +250 de maná +25 de armadura +20% de reducción de enfriamiento Pasiva ÚNICA, Detección de Trampas: Otorga visión verdadera de las trampas enemigas cercanas. Activa ÚNICA, Vista de Cazador: Una niebla arcana concede visión de una zona específica durante 5 s y revela durante 3 s a los campeones enemigos que entren en ella (60 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "-0.2",
                "Effect2Amount": "0",
                "Effect6Amount": "60",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "colloq": "Hextech Sweeper",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 250,
                "FlatArmorMod": 25,
                "FlatHPPoolMod": 225
            },
            "id": 3187,
            "name": "Barredor arcano"
        },
        "3190": {
            "from": [
                "3105",
                "1033"
            ],
            "description": "<stats>+30 de armadura<br>+60 de resistencia mágica</stats><br><br><active>Activa ÚNICA:</active> Los campeones aliados cercanos reciben un escudo que se desvanece durante 2.5 s y que absorbe hasta 38 (+22 por nivel) <scaleHealth>(+2%~36% de la vida adicional)</scaleHealth> de daño (90 s de enfriamiento).<br><br><rules>El escudo por nivel utiliza el más alto de los niveles entre el tuyo y el del objetivo.<br>La relación de escudo progresa con el nivel.<br>La cantidad de escudo se reduce a 50% si el objetivo ya se ha visto afectado por otro Medallón de los Solari de Hierro en los últimos 8 s.</rules>",
            "gold": {
                "total": 2200,
                "sell": 1540,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Armor",
                "Active"
            ],
            "plaintext": "Puede activarse para proteger a los aliados cercanos del daño.",
            "image": {
                "full": "3190.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 96
            },
            "sanitizedDescription": "+30 de armadura +60 de resistencia mágica Activa ÚNICA: Los campeones aliados cercanos reciben un escudo que se desvanece durante 2.5 s y que absorbe hasta 38 (+22 por nivel) (+2%~36% de la vida adicional) de daño (90 s de enfriamiento). El escudo por nivel utiliza el más alto de los niveles entre el tuyo y el del objetivo. La relación de escudo progresa con el nivel. La cantidad de escudo se reduce a 50% si el objetivo ya se ha visto afectado por otro Medallón de los Solari de Hierro en los últimos 8 s.",
            "effect": {
                "Effect3Amount": "2.5",
                "Effect1Amount": "38",
                "Effect2Amount": "22",
                "Effect6Amount": "90",
                "Effect9Amount": "0.36",
                "Effect4Amount": "0.5",
                "Effect7Amount": "0",
                "Effect8Amount": "0.02",
                "Effect5Amount": "8"
            },
            "colloq": "Locket of the Iron Solari",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 60,
                "FlatArmorMod": 30
            },
            "id": 3190,
            "name": "Medallón de los Solari de Hierro"
        },
        "3191": {
            "from": [
                "1029",
                "1052",
                "1029"
            ],
            "description": "<stats>+30 armadura<br>+20 poder de habilidad</stats><br><br><unique>Pasiva ÚNICA:</unique> Asesinar a una unidad otorga 0.5 de armadura y de poder de habilidad adicionales. Se puede acumular hasta 30 veces.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 165,
                "purchasable": true
            },
            "tags": [
                "Armor",
                "SpellDamage"
            ],
            "plaintext": "Aumenta la armadura y el poder de habilidad.",
            "image": {
                "full": "3191.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 144
            },
            "sanitizedDescription": "+30 armadura +20 poder de habilidad Pasiva ÚNICA: Asesinar a una unidad otorga 0.5 de armadura y de poder de habilidad adicionales. Se puede acumular hasta 30 veces.",
            "effect": {
                "Effect1Amount": "0.5",
                "Effect2Amount": "30"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3090",
                "3170",
                "3157"
            ],
            "stats": {
                "FlatArmorMod": 30,
                "FlatMagicDamageMod": 20
            },
            "id": 3191,
            "name": "Brazalete de la buscadora"
        },
        "3193": {
            "from": [
                "1031",
                "1057"
            ],
            "description": "<stats>+40 de armadura<br>+40 de resistencia mágica</stats></stats><br><br><unique>Pasiva ÚNICA - Piel de piedra:</unique> Si hay más de 3 campeones enemigos cerca, otorga 40 de armadura y resistencia mágica adicional.<br><active>Activa ÚNICA - Metalización:</active> Aumenta la vida un 40% y el tamaño del campeón, pero reduce el daño infligido un 60% durante 4 s (90 s de enfriamiento). Si Piel de piedra está activa, el aumento de vida se convierte en un 100%.",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 980,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "Armor"
            ],
            "plaintext": "Aumenta considerablemente la defensa cerca de varios enemigos.",
            "image": {
                "full": "3193.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 192
            },
            "sanitizedDescription": "+40 de armadura +40 de resistencia mágica Pasiva ÚNICA - Piel de piedra: Si hay más de 3 campeones enemigos cerca, otorga 40 de armadura y resistencia mágica adicional. Activa ÚNICA - Metalización: Aumenta la vida un 40% y el tamaño del campeón, pero reduce el daño infligido un 60% durante 4 s (90 s de enfriamiento). Si Piel de piedra está activa, el aumento de vida se convierte en un 100%.",
            "effect": {
                "Effect3Amount": "3",
                "Effect1Amount": "40",
                "Effect2Amount": "850",
                "Effect6Amount": "0.4",
                "Effect9Amount": "0.25",
                "Effect11Amount": "1",
                "Effect4Amount": "4",
                "Effect7Amount": "0.07",
                "Effect8Amount": "1",
                "Effect10Amount": "90",
                "Effect5Amount": "0.6"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40,
                "FlatArmorMod": 40
            },
            "id": 3193,
            "name": "Protector pétreo de gárgola"
        },
        "3194": {
            "from": [
                "1033",
                "3211",
                "1006"
            ],
            "description": "<stats>+350 de vida<br>+55 de resistencia mágica<br>+100% de regeneración de vida básica <br>+10% de reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA:</unique> Recibir daño mágico de un hechizo o efecto reduce el daño mágico siguiente recibido de ese mismo hechizo o efecto un 15% durante 4 s.",
            "gold": {
                "total": 2800,
                "sell": 1960,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "Health",
                "SpellBlock",
                "HealthRegen",
                "CooldownReduction"
            ],
            "plaintext": "Reduce el daño de los hechizos y efectos repetidos.",
            "image": {
                "full": "3194.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 240
            },
            "sanitizedDescription": "+350 de vida +55 de resistencia mágica +100% de regeneración de vida básica +10% de reducción de enfriamiento Pasiva ÚNICA: Recibir daño mágico de un hechizo o efecto reduce el daño mágico siguiente recibido de ese mismo hechizo o efecto un 15% durante 4 s.",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "4",
                "Effect3Amount": "25"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatHPPoolMod": 350
            },
            "id": 3194,
            "name": "Yelmo adaptable"
        },
        "3196": {
            "from": [
                "3200"
            ],
            "description": "<stats>+3 poder de habilidad por nivel<br>+15 maná por nivel</stats><br><br><unique>Pasiva ÚNICA, Progreso:</unique> Viktor puede mejorar una de sus habilidades.",
            "gold": {
                "total": 1250,
                "sell": 875,
                "base": 1250,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Permite a Viktor mejorar una habilidad de su elección.",
            "image": {
                "full": "3196.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 288
            },
            "sanitizedDescription": "+3 poder de habilidad por nivel +15 maná por nivel Pasiva ÚNICA, Progreso: Viktor puede mejorar una de sus habilidades.",
            "effect": {
                "Effect1Amount": "3",
                "Effect2Amount": "15"
            },
            "colloq": "Augment: Power;viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "requiredChampion": "Viktor",
            "into": [
                "3197"
            ],
            "stats": {},
            "id": 3196,
            "name": "Núcleo hex tipo 1"
        },
        "3197": {
            "from": [
                "3196"
            ],
            "description": "<stats>+6 poder de habilidad por nivel<br>+20 maná por nivel</stats><br><br><unique>Pasiva ÚNICA, Progreso:</unique> Viktor puede mejorar una de sus habilidades.",
            "gold": {
                "total": 2250,
                "sell": 1575,
                "base": 1000,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Permite a Viktor mejorar una habilidad de su elección.",
            "image": {
                "full": "3197.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 336
            },
            "sanitizedDescription": "+6 poder de habilidad por nivel +20 maná por nivel Pasiva ÚNICA, Progreso: Viktor puede mejorar una de sus habilidades.",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "20"
            },
            "colloq": "Augment: Gravity;viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "requiredChampion": "Viktor",
            "into": [
                "3198"
            ],
            "stats": {},
            "id": 3197,
            "name": "Núcleo hex tipo 2"
        },
        "3198": {
            "from": [
                "3197"
            ],
            "description": "<stats>+10 poder de habilidad por nivel<br>+25 maná por nivel</stats><br><br><unique>Pasiva ÚNICA, Evolución gloriosa:</unique> Viktor ha alcanzado la cima de su poder y puede mejorar Tormenta del caos además de sus otras habilidades.",
            "gold": {
                "total": 3000,
                "sell": 2100,
                "base": 750,
                "purchasable": true
            },
            "tags": [
                "Mana",
                "SpellDamage"
            ],
            "plaintext": "Permite a Viktor mejorar una habilidad de su elección.",
            "image": {
                "full": "3198.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 384
            },
            "sanitizedDescription": "+10 poder de habilidad por nivel +25 maná por nivel Pasiva ÚNICA, Evolución gloriosa: Viktor ha alcanzado la cima de su poder y puede mejorar Tormenta del caos además de sus otras habilidades.",
            "effect": {
                "Effect1Amount": "10",
                "Effect2Amount": "25"
            },
            "colloq": "Augment: Death;viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 4,
            "requiredChampion": "Viktor",
            "stats": {},
            "id": 3198,
            "name": "Núcleo hex perfecto"
        },
        "3200": {
            "stats": {},
            "description": "<stats>+1 poder de habilidad por nivel<br>+10 maná por nivel</stats><br><br><unique>Pasiva ÚNICA, Progreso:</unique> Este objeto se puede mejorar hasta tres veces para potenciar las habilidades básicas de Viktor.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "plaintext": "Aumenta el poder de habilidad y puede mejorarse para aumentar las habilidades de Viktor.",
            "image": {
                "full": "3200.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 336,
                "x": 432
            },
            "sanitizedDescription": "+1 poder de habilidad por nivel +10 maná por nivel Pasiva ÚNICA, Progreso: Este objeto se puede mejorar hasta tres veces para potenciar las habilidades básicas de Viktor.",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "10"
            },
            "inStore": false,
            "colloq": "The Hex Core;viktor",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Viktor",
            "into": [
                "3196"
            ],
            "id": 3200,
            "name": "Prototipo de núcleo hex"
        },
        "3211": {
            "from": [
                "1028",
                "1033"
            ],
            "description": "<stats>+250 vida<br>+25 resistencia mágica</stats><br><br><unique>Pasiva ÚNICA:</unique> Otorga un 150% de regeneración de vida básica durante un máximo de 10 s tras sufrir daño a manos de un campeón enemigo.",
            "gold": {
                "total": 1200,
                "sell": 840,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "SpellBlock"
            ],
            "plaintext": "Mejora la defensa y otorga regeneración al recibir daño.",
            "image": {
                "full": "3211.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 0
            },
            "sanitizedDescription": "+250 vida +25 resistencia mágica Pasiva ÚNICA: Otorga un 150% de regeneración de vida básica durante un máximo de 10 s tras sufrir daño a manos de un campeón enemigo.",
            "effect": {
                "Effect1Amount": "1.5",
                "Effect2Amount": "10"
            },
            "colloq": "hat",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3065",
                "3194"
            ],
            "stats": {
                "FlatSpellBlockMod": 25,
                "FlatHPPoolMod": 250
            },
            "id": 3211,
            "name": "Hábito del espectro"
        },
        "3222": {
            "from": [
                "3028",
                "3114"
            ],
            "description": "<stats>+40 de resistencia mágica<br>+10% de reducción de enfriamiento<br><mana>+100% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA:</unique> +20% de potencia en curaciones y escudos<br><unique>Pasiva ÚNICA, armonía:</unique> otorga un porcentaje de regeneración de vida básica adicional igual al porcentaje de regeneración de maná básico adicional.<br><active>Activa ÚNICA:</active> Limpia todos los aturdimientos, inmovilizaciones, provocaciones, miedos, silencios y ralentizaciones en un campeón aliado y le concede inmunidad a ralentizaciones durante 2 s (120 s de enfriamiento). <br><br>Eliminar un efecto otorga al aliado un 40% de velocidad de movimiento durante 2 s.",
            "gold": {
                "total": 2100,
                "sell": 1470,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "ManaRegen",
                "Active",
                "CooldownReduction"
            ],
            "plaintext": "Puede activarse para eliminar todos los efectos incapacitantes de un campeón aliado.",
            "image": {
                "full": "3222.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 48
            },
            "sanitizedDescription": "+40 de resistencia mágica +10% de reducción de enfriamiento +100% de regeneración de maná básica Pasiva ÚNICA: +20% de potencia en curaciones y escudos Pasiva ÚNICA, armonía: otorga un porcentaje de regeneración de vida básica adicional igual al porcentaje de regeneración de maná básico adicional. Activa ÚNICA: Limpia todos los aturdimientos, inmovilizaciones, provocaciones, miedos, silencios y ralentizaciones en un campeón aliado y le concede inmunidad a ralentizaciones durante 2 s (120 s de enfriamiento). Eliminar un efecto otorga al aliado un 40% de velocidad de movimiento durante 2 s.",
            "effect": {
                "Effect3Amount": "0.5",
                "Effect1Amount": "2",
                "Effect2Amount": "5",
                "Effect6Amount": "8",
                "Effect12Amount": "2",
                "Effect9Amount": "1",
                "Effect11Amount": "0.2",
                "Effect4Amount": "0.25",
                "Effect7Amount": "90",
                "Effect8Amount": "1",
                "Effect13Amount": "120",
                "Effect10Amount": "0.4",
                "Effect5Amount": "600"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 40
            },
            "id": 3222,
            "name": "Crisol de Mikael"
        },
        "3252": {
            "from": [
                "1036"
            ],
            "description": "<stats>+10 de daño de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> +20 de velocidad de movimiento fuera de combate<br><unique>Pasiva ÚNICA:</unique> Se transforma en una Daga dentada después de cazar 3 monstruos gigantes en la jungla enemiga (50 s de enfriamiento).",
            "gold": {
                "total": 600,
                "sell": 420,
                "base": 250,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Se transforma en una Daga dentada después de cazar en la jungla enemiga.",
            "image": {
                "full": "3252.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 96
            },
            "sanitizedDescription": "+10 de daño de ataque Pasiva ÚNICA: +20 de velocidad de movimiento fuera de combate Pasiva ÚNICA: Se transforma en una Daga dentada después de cazar 3 monstruos gigantes en la jungla enemiga (50 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "100",
                "Effect2Amount": "15",
                "Effect3Amount": "20",
                "Effect4Amount": "50"
            },
            "stacks": 0,
            "colloq": "daga dentada;letalidad",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "stats": {
                "FlatPhysicalDamageMod": 10
            },
            "id": 3252,
            "name": "Daga de furtivo"
        },
        "3285": {
            "from": [
                "1058",
                "3113"
            ],
            "description": "<stats>+100 poder de habilidad<br>+10% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Eco:</unique> Gana cargas al moverse o usar hechizos. Con 100 cargas, el próximo impacto de hechizo que cause daño a un enemigo consumirá todas las cargas e infligirá 100 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.",
            "gold": {
                "total": 3200,
                "sell": 2240,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "NonbootsMovement",
                "OnHit",
                "SpellDamage"
            ],
            "plaintext": "Moverse y lanzar hechizos genera cargas que liberan rayos con el próximo hechizo.",
            "image": {
                "full": "3285.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 144
            },
            "sanitizedDescription": "+100 poder de habilidad +10% velocidad de movimiento Pasiva ÚNICA, Eco: Gana cargas al moverse o usar hechizos. Con 100 cargas, el próximo impacto de hechizo que cause daño a un enemigo consumirá todas las cargas e infligirá 100 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.",
            "effect": {
                "Effect3Amount": "4",
                "Effect1Amount": "100",
                "Effect2Amount": "100",
                "Effect6Amount": "10",
                "Effect4Amount": "0.1",
                "Effect5Amount": "35"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "PercentMovementSpeedMod": 0.1,
                "FlatMagicDamageMod": 100
            },
            "id": 3285,
            "name": "Eco de Luden"
        },
        "3301": {
            "stats": {},
            "description": "<stats>+5% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Favor:</unique> Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan <font color='#D4AF37'>25</font> de oro o un <font color='#44DDFF'>15%</font> del maná que te falte (mínimo 15). Los súbditos con cañón siempre sueltan monedas.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto y transfórmalo en <font color='#CFBF84'>Medallón del nómada</font>.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Favor</font> se transforma en <font color='#CFBF84'><a href='coinlinequestreward'>Favor del emperador</a></font> y recibes un <font color='#29E3D6'><a href='coinlinequestrewardelixir'>Elixir de habilidad</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit><br><br><i><font color='#447777'>''El polvo dorado surge del desierto y se adhiere a la moneda''. - Historiadora Shurelya, 11 de noviembre, 23 CLE</font></i>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "ManaRegen",
                "GoldPer",
                "CooldownReduction",
                "Lane"
            ],
            "plaintext": "Otorga oro y maná cada vez que muere un súbdito enemigo cercano que tú no hayas matado.",
            "image": {
                "full": "3301.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 192
            },
            "sanitizedDescription": "+5% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Favor: Los súbditos enemigos asesinados por tus aliados sueltan monedas de vez en cuando, que proporcionan 25 de oro o un 15% del maná que te falte (mínimo 15). Los súbditos con cañón siempre sueltan monedas. MISIÓN: Gana 650 de oro con este objeto y transfórmalo en Medallón del nómada. RECOMPENSA: Favor se transforma en Favor del emperador y recibes un Elixir de habilidad. Limitado a 1 objeto de ganancia de oro. ''El polvo dorado surge del desierto y se adhiere a la moneda''. - Historiadora Shurelya, 11 de noviembre, 23 CLE",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "25",
                "Effect2Amount": "13",
                "Effect6Amount": "0",
                "Effect12Amount": "0.15",
                "Effect9Amount": "0",
                "Effect11Amount": "40",
                "Effect4Amount": "0",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "15",
                "Effect10Amount": "650",
                "Effect5Amount": "0"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3096"
            ],
            "id": 3301,
            "name": "Moneda antigua"
        },
        "3302": {
            "stats": {
                "FlatHPPoolMod": 75
            },
            "description": "<stats>+75 de vida<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Botín de guerra:</unique> Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 195 de vida (+5 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 15 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 40 s. Máximo: 2 cargas.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto y transfórmalo en <font color='#CFBF84'>Refuerzo de Targon</font>.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Batería de escudo</font>, un escudo permanente que se regenera lentamente fuera de combate.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "Aura",
                "GoldPer",
                "Health",
                "Lane"
            ],
            "plaintext": "Al matar súbditos enemigos, puedes curar y otorgar oro a un aliado cercano cada cierto tiempo.",
            "image": {
                "full": "3302.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 240
            },
            "sanitizedDescription": "+75 de vida +2 de oro cada 10 s Pasiva ÚNICA - Botín de guerra: Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 195 de vida (+5 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 15 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 40 s. Máximo: 2 cargas. MISIÓN: Gana 650 de oro con este objeto y transfórmalo en Refuerzo de Targon. RECOMPENSA: Batería de escudo, un escudo permanente que se regenera lentamente fuera de combate. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "195",
                "Effect2Amount": "15",
                "Effect6Amount": "0",
                "Effect12Amount": "30",
                "Effect9Amount": "0",
                "Effect11Amount": "650",
                "Effect4Amount": "5",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "2",
                "Effect10Amount": "0",
                "Effect5Amount": "40"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3097"
            ],
            "id": 3302,
            "name": "Escudo reliquia"
        },
        "3303": {
            "stats": {
                "FlatMagicDamageMod": 5
            },
            "description": "<stats>+5 de poder de habilidad<br>+2 de oro cada 10 s<br><mana>+25% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA - Tributo:</unique> Los ataques y hechizos de daño contra campeones o estructuras infligen 10 de daño adicional y otorgan 8 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Asesinar súbditos provoca que Tributo tarde más en estar disponible.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto y transfórmalo en <font color='#CFBF84'>Colmillo de escarcha</font>.<br><passive>RECOMPENSA:</passive><font color='#CFBF84'>Tributo</font> se transforma en <font color='#CFBF84'><a href='frostqueenslinequestreward'>Tributo a la reina</a></font>.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 350,
                "sell": 140,
                "base": 350,
                "purchasable": true
            },
            "tags": [
                "GoldPer",
                "Lane",
                "ManaRegen",
                "SpellDamage"
            ],
            "plaintext": "Otorga oro cuando dañas a los enemigos.",
            "image": {
                "full": "3303.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 288
            },
            "sanitizedDescription": "+5 de poder de habilidad +2 de oro cada 10 s +25% de regeneración de maná básica Pasiva ÚNICA - Tributo: Los ataques y hechizos de daño contra campeones o estructuras infligen 10 de daño adicional y otorgan 8 de oro. Esto se puede repetir hasta 3 veces cada 30 s. Asesinar súbditos provoca que Tributo tarde más en estar disponible. MISIÓN: Gana 650 de oro con este objeto y transfórmalo en Colmillo de escarcha. RECOMPENSA:Tributo se transforma en Tributo a la reina. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect18Amount": "0.5",
                "Effect3Amount": "6",
                "Effect16Amount": "0",
                "Effect15Amount": "0",
                "Effect1Amount": "10",
                "Effect2Amount": "8",
                "Effect19Amount": "1",
                "Effect14Amount": "0",
                "Effect17Amount": "650",
                "Effect12Amount": "0",
                "Effect9Amount": "0",
                "Effect11Amount": "0",
                "Effect4Amount": "3",
                "Effect6Amount": "2",
                "Effect7Amount": "0",
                "Effect8Amount": "0",
                "Effect13Amount": "0",
                "Effect10Amount": "0",
                "Effect5Amount": "30"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "into": [
                "3098"
            ],
            "id": 3303,
            "name": "Daga de hechicero"
        },
        "3340": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 Talismán.</groupLimit><br><br><active>Activa:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revela la zona circundante durante <scaleLevel>60-120</scaleLevel> s. <br><br>Almacena una carga cada <scaleLevel>180-90</scaleLevel> s, hasta un máximo de 2 cargas.<br><br>La duración del guardián y el tiempo de recarga mejoran progresivamente con el nivel.<br><br><rules>(Limitado a 3 <font color='#BBFFFF'>Guardianes invisibles</font> en el mapa por jugador. Si cambias a un talismán de tipo <font color='#BBFFFF'>lente</font>, el uso del <font color='#BBFFFF'>talismán</font> se deshabilitará durante 120 s).</rules>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Jungle",
                "Lane",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Coloca periódicamente un Guardián invisible.",
            "image": {
                "full": "3340.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 336
            },
            "sanitizedDescription": "Limitado a 1 Talismán. Activa: Consume una carga para colocar un Guardián invisible que revela la zona circundante durante 60-120 s. Almacena una carga cada 180-90 s, hasta un máximo de 2 cargas. La duración del guardián y el tiempo de recarga mejoran progresivamente con el nivel. (Limitado a 3 Guardianes invisibles en el mapa por jugador. Si cambias a un talismán de tipo lente, el uso del talismán se deshabilitará durante 120 s).",
            "effect": {
                "Effect3Amount": "120",
                "Effect1Amount": "60",
                "Effect2Amount": "180",
                "Effect6Amount": "9",
                "Effect4Amount": "90",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "2"
            },
            "colloq": "amarillo;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3340,
            "name": "Tótem guardián (talismán)"
        },
        "3341": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><br><br><active>Activa:</active> Escudriña un área durante 6 s, alerta sobre unidades enemigas hostiles, revela las trampas invisibles y revela/deshabilita los guardianes (enfriamiento de 90 a 60 s).<br><br>El alcance de lanzamiento y el radio del barrido mejoran progresivamente por nivel.<br><br><rules>(Si cambias a un talismán de tipo <font color='#BBFFFF'>tótem</font>, el uso del <font color='#BBFFFF'>talismán</font> se deshabilitará durante 120 s).</rules>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Jungle",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Detecta y desactiva los guardianes y trampas invisibles cercanos.",
            "image": {
                "full": "3341.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 384
            },
            "sanitizedDescription": "Limitado a 1 talismán. Activa: Escudriña un área durante 6 s, alerta sobre unidades enemigas hostiles, revela las trampas invisibles y revela/deshabilita los guardianes (enfriamiento de 90 a 60 s). El alcance de lanzamiento y el radio del barrido mejoran progresivamente por nivel. (Si cambias a un talismán de tipo tótem, el uso del talismán se deshabilitará durante 120 s).",
            "effect": {
                "Effect3Amount": "400",
                "Effect1Amount": "6",
                "Effect2Amount": "90",
                "Effect6Amount": "9",
                "Effect9Amount": "60",
                "Effect11Amount": "575",
                "Effect4Amount": "60",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect10Amount": "450",
                "Effect5Amount": "1500"
            },
            "colloq": "rojo",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3341,
            "name": "Lente de gran alcance (talismán)"
        },
        "3345": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><br><br><active>Activa:</active> Consume una carga para revivir al instante en la plataforma de tu invocador y otorga un 125% de velocidad de movimiento que disminuye tras 12 s.<br><br><rules>Se obtienen cargas adicionales en los niveles 9 y 14.</rules><br><br><font color='#BBFFFF'>(Máx.: 2 cargas)</font></rules><br><br>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Consume una carga para revivir al campeón.",
            "image": {
                "full": "3345.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 384,
                "x": 432
            },
            "sanitizedDescription": "Limitado a 1 talismán. Activa: Consume una carga para revivir al instante en la plataforma de tu invocador y otorga un 125% de velocidad de movimiento que disminuye tras 12 s. Se obtienen cargas adicionales en los niveles 9 y 14. (Máx.: 2 cargas)",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3345,
            "name": "Ancla del alma (talismán)"
        },
        "3348": {
            "stats": {},
            "description": "<active>Activa ÚNICA, Vista de Cazador:</active> Una niebla arcana concede visión de una zona específica durante 5 s, revela a los campeones enemigos y otorga <font color='#ee91d7'>visión verdadera</font> de las trampas en la zona durante 3 s (90 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Vision",
                "Trinket",
                "Stealth",
                "Active"
            ],
            "plaintext": "Al activarse revela una zona cercana del mapa",
            "image": {
                "full": "3348.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 0
            },
            "sanitizedDescription": "Activa ÚNICA, Vista de Cazador: Una niebla arcana concede visión de una zona específica durante 5 s, revela a los campeones enemigos y otorga visión verdadera de las trampas en la zona durante 3 s (90 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0",
                "Effect2Amount": "0",
                "Effect6Amount": "90",
                "Effect4Amount": "5",
                "Effect5Amount": "3"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3348,
            "name": "Barredor arcano"
        },
        "3361": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><levelLimit> *Requiere nivel 9 o más para mejorar.</levelLimit><stats></stats><br><br><unique>Activa ÚNICA:</unique> Consume una carga para colocar un guardián invisible que revela la zona circundante durante 180 s. Almacena una carga cada 60 s, hasta un máximo de 2. Límite de 3 <font color='#BBFFFF'>Guardianes invisibles</font> en el mapa por jugador.<br><br><rules>(No se pueden usar talismanes durante los primeros 30 s de una partida. Si vendes un talismán, no podrás usar ninguno hasta pasados 120 s.)</rules>",
            "gold": {
                "total": 250,
                "sell": 175,
                "base": 250,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Coloca periódicamente un Guardián invisible.",
            "image": {
                "full": "3361.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 48
            },
            "sanitizedDescription": "Limitado a 1 talismán. *Requiere nivel 9 o más para mejorar. Activa ÚNICA: Consume una carga para colocar un guardián invisible que revela la zona circundante durante 180 s. Almacena una carga cada 60 s, hasta un máximo de 2. Límite de 3 Guardianes invisibles en el mapa por jugador. (No se pueden usar talismanes durante los primeros 30 s de una partida. Si vendes un talismán, no podrás usar ninguno hasta pasados 120 s.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "180",
                "Effect2Amount": "60",
                "Effect6Amount": "9",
                "Effect4Amount": "0",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "inStore": false,
            "colloq": "amarillo;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3361,
            "name": "Tótem invisible mayor (talismán)"
        },
        "3362": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><levelLimit> *Se necesita nivel 9 o más para mejorar.</levelLimit><stats></stats><br><br><unique>Activa ÚNICA:</unique> Coloca un guardián visible que revela la zona circundante y las unidades invisibles en la misma hasta que se destruya (enfriamiento de 120 s). Límite de 1 <font color='#BBFFFF'>Guardián de visión total</font> en el mapa por jugador.<br><br><rules>(No se pueden usar talismanes durante los primeros 30 s de una partida. Si vendes un talismán, no podrás usar ninguno hasta pasados 120 s.)</rules>",
            "gold": {
                "total": 250,
                "sell": 175,
                "base": 250,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Coloca periódicamente un Guardián de visión total.",
            "image": {
                "full": "3362.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 96
            },
            "sanitizedDescription": "Limitado a 1 talismán. *Se necesita nivel 9 o más para mejorar. Activa ÚNICA: Coloca un guardián visible que revela la zona circundante y las unidades invisibles en la misma hasta que se destruya (enfriamiento de 120 s). Límite de 1 Guardián de visión total en el mapa por jugador. (No se pueden usar talismanes durante los primeros 30 s de una partida. Si vendes un talismán, no podrás usar ninguno hasta pasados 120 s.)",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "120",
                "Effect2Amount": "0",
                "Effect6Amount": "9",
                "Effect4Amount": "0",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "inStore": false,
            "colloq": "amarillo;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3362,
            "name": "Tótem de visión mayor (talismán)"
        },
        "3363": {
            "stats": {},
            "description": "<levelLimit>*Requiere nivel 9 o más para mejorar.</levelLimit><br><br>Modifica el talismán <font color='#FFFFFF'>Tótem guardián</font>:<br><br><stats><font color='#00FF00'>+</font> Aumenta considerablemente el alcance de lanzamiento (+650%)<br><font color='#00FF00'>+ </font>Tiene duración infinita y no cuenta para el límite de guardianes<br><font color='#FF0000'>-</font><font color='#FF6600'>10% de aumento de enfriamiento</font><br><font color='#FF0000'>-</font><font color='#FF6600'>Es frágil, los enemigos pueden verlo y los aliados no pueden marcarlo</font><br><font color='#FF0000'>-</font><font color='#FF6600'>45% de reducción del radio de visión del guardián</font><br><font color='#FF0000'>-</font><font color='#FF6600'>No puede acumular cargas</font></stats>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Otorga más alcance y revela la zona seleccionada.",
            "image": {
                "full": "3363.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 144
            },
            "sanitizedDescription": "*Requiere nivel 9 o más para mejorar. Modifica el talismán Tótem guardián: + Aumenta considerablemente el alcance de lanzamiento (+650%) + Tiene duración infinita y no cuenta para el límite de guardianes -10% de aumento de enfriamiento -Es frágil, los enemigos pueden verlo y los aliados no pueden marcarlo -45% de reducción del radio de visión del guardián -No puede acumular cargas",
            "effect": {
                "Effect3Amount": "5",
                "Effect15Amount": "45",
                "Effect1Amount": "4000",
                "Effect2Amount": "2",
                "Effect14Amount": "10",
                "Effect12Amount": "60",
                "Effect9Amount": "6.5",
                "Effect11Amount": "99",
                "Effect4Amount": "198",
                "Effect6Amount": "9",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect13Amount": "180",
                "Effect10Amount": "198",
                "Effect5Amount": "60"
            },
            "colloq": "blue; totem;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3363,
            "name": "Visión lejana modificada"
        },
        "3364": {
            "stats": {},
            "description": "<levelLimit>*Requiere nivel 9 o más para la mejora.</levelLimit><stats></stats><br><br>Modifica el talismán <font color='#FFFFFF'>Lente de gran alcance</font>:<br><br><stats><font color='#00FF00'>+</font> Aumenta el radio de detección<br><font color='#00FF00'>+</font> El efecto de detección te acompaña durante 10 s<br><font color='#FF0000'>-</font><font color='#FF6600'> El alcance de lanzamiento se reduce a cero</font></stats>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Durante unos segundos es capaz de detectar las trampas y guardianes invisibles cercanos.",
            "image": {
                "full": "3364.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 192
            },
            "sanitizedDescription": "*Requiere nivel 9 o más para la mejora. Modifica el talismán Lente de gran alcance: + Aumenta el radio de detección + El efecto de detección te acompaña durante 10 s - El alcance de lanzamiento se reduce a cero",
            "effect": {
                "Effect3Amount": "90",
                "Effect1Amount": "6",
                "Effect2Amount": "10",
                "Effect6Amount": "9",
                "Effect9Amount": "60",
                "Effect4Amount": "60",
                "Effect7Amount": "30",
                "Effect8Amount": "120",
                "Effect5Amount": "0"
            },
            "colloq": "red; lens;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3364,
            "name": "Oráculo modificado"
        },
        "3401": {
            "from": [
                "3097",
                "3067"
            ],
            "description": "<stats>+450 de vida<br>+100% de regeneración de vida básica <br>+10% de reducción de enfriamiento<br>+2 de oro cada 10 s</stats><br><br><unique>Pasiva ÚNICA - Botín de guerra:</unique> Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 320 de vida (+20 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 50 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 30 s. Máximo: 4 cargas.<br><unique>Activa ÚNICA:</unique> Te otorga a ti y a un aliado un escudo equivalente al 10% de tu vida máxima durante 4 s. Tras 4 s, los escudos explotan y ralentizan a los enemigos cercanos un 40% durante 2 s (60 s de enfriamiento).  Selecciona de forma automática al aliado con menos vida si se lanza sobre uno mismo.<hr><passive>MISIÓN:</passive> Gana 650 de oro con este objeto.<br><passive>RECOMPENSA:</passive> <font color='#CFBF84'>Batería de escudo</font>, un escudo permanente que se regenera lentamente fuera de combate.<br><br><groupLimit>Limitado a 1 objeto de ganancia de oro.</groupLimit>",
            "gold": {
                "total": 2200,
                "sell": 880,
                "base": 550,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Active",
                "GoldPer",
                "CooldownReduction"
            ],
            "plaintext": "Escuda a un aliado por un valor proporcional a tu vida.",
            "image": {
                "full": "3401.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 240
            },
            "sanitizedDescription": "+450 de vida +100% de regeneración de vida básica +10% de reducción de enfriamiento +2 de oro cada 10 s Pasiva ÚNICA - Botín de guerra: Los ataques básicos cuerpo a cuerpo ejecutan a los súbditos con menos de 320 de vida (+20 por nivel). Al asesinar a un súbdito, tanto el dueño como el campeón aliado más cercano recuperan 50 de vida y reciben el oro correspondiente. Se necesita a un aliado cerca para activar estos efectos. Se recarga cada 30 s. Máximo: 4 cargas. Activa ÚNICA: Te otorga a ti y a un aliado un escudo equivalente al 10% de tu vida máxima durante 4 s. Tras 4 s, los escudos explotan y ralentizan a los enemigos cercanos un 40% durante 2 s (60 s de enfriamiento). Selecciona de forma automática al aliado con menos vida si se lanza sobre uno mismo. MISIÓN: Gana 650 de oro con este objeto. RECOMPENSA: Batería de escudo, un escudo permanente que se regenera lentamente fuera de combate. Limitado a 1 objeto de ganancia de oro.",
            "effect": {
                "Effect3Amount": "0.1",
                "Effect1Amount": "320",
                "Effect2Amount": "50",
                "Effect6Amount": "2",
                "Effect12Amount": "30",
                "Effect9Amount": "2",
                "Effect11Amount": "650",
                "Effect4Amount": "4",
                "Effect7Amount": "60",
                "Effect8Amount": "120",
                "Effect13Amount": "4",
                "Effect10Amount": "20",
                "Effect5Amount": "-0.4"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatHPPoolMod": 450
            },
            "id": 3401,
            "name": "Coraza de montaraz"
        },
        "3410": {
            "stats": {},
            "description": "<unique>Activa ÚNICA, Lente de Gran alcance:</unique> Revela y desactiva los guardianes y trampas invisibles de un área de tamaño intermedio durante 6 s, y además detecta a las unidades invisibles durante 10 s (enfriamiento de 60 s). <br><br><unique>Pasiva ÚNICA, Recuerdos de Caza:</unique> Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo.<br><br><passive>3 trofeos:</passive> Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza. <br><passive>6 trofeos:</passive> El alcance del Salto de Rengar aumenta en 125.<br><passive>12 trofeos:</passive> La duración de Emoción por la cacería aumenta 5 s.<br><passive>20 trofeos:</passive> La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en modo de sigilo.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3410.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 288
            },
            "sanitizedDescription": "Activa ÚNICA, Lente de Gran alcance: Revela y desactiva los guardianes y trampas invisibles de un área de tamaño intermedio durante 6 s, y además detecta a las unidades invisibles durante 10 s (enfriamiento de 60 s). Pasiva ÚNICA, Recuerdos de Caza: Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo. 3 trofeos: Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza. 6 trofeos: El alcance del Salto de Rengar aumenta en 125. 12 trofeos: La duración de Emoción por la cacería aumenta 5 s. 20 trofeos: La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en modo de sigilo.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect6Amount": "60",
                "Effect4Amount": "6",
                "Effect5Amount": "10"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3410,
            "name": "Cabeza de Kha'Zix"
        },
        "3416": {
            "stats": {},
            "description": "<unique>Activa ÚNICA, Adivinación:</unique> Revela durante 2 s una zona de tamaño pequeño que se halle a menos de 4000 de distancia, y además le posibilita que pueda detectar a las unidades que estén en sigilo durante 5 s (enfriamiento de 90 s).<br><br><unique>Pasiva ÚNICA, Recuerdos de Caza:</unique> Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo.<br><br><passive>3 trofeos:</passive> Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza .<br><passive>6 trofeos:</passive>El alcance del Salto de Rengar aumenta en 125.<br><passive>12 trofeos:</passive> La duración de Emoción por la cacería aumenta 5 s.<br><passive>20 trofeos:</passive> La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en modo de sigilo.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3416.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 336
            },
            "sanitizedDescription": "Activa ÚNICA, Adivinación: Revela durante 2 s una zona de tamaño pequeño que se halle a menos de 4000 de distancia, y además le posibilita que pueda detectar a las unidades que estén en sigilo durante 5 s (enfriamiento de 90 s). Pasiva ÚNICA, Recuerdos de Caza: Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo. 3 trofeos: Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza . 6 trofeos:El alcance del Salto de Rengar aumenta en 125. 12 trofeos: La duración de Emoción por la cacería aumenta 5 s. 20 trofeos: La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en modo de sigilo.",
            "effect": {
                "Effect3Amount": "5",
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect6Amount": "5",
                "Effect4Amount": "4000",
                "Effect7Amount": "90",
                "Effect5Amount": "2"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3416,
            "name": "Cabeza de Kha'Zix"
        },
        "3422": {
            "stats": {},
            "description": "<unique>Pasiva ÚNICA, Recuerdos de Caza:</unique> Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo.<br><br><passive>3 trofeos:</passive> Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza .<br><passive>6 trofeos:</passive>El alcance del Salto de Rengar aumenta en 125.<br><passive>12 trofeos:</passive> La duración de Emoción por la cacería aumenta 5 s.<br><passive>20 trofeos:</passive> La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en sigilo.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3422.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 384
            },
            "sanitizedDescription": "Pasiva ÚNICA, Recuerdos de Caza: Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo. 3 trofeos: Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza . 6 trofeos:El alcance del Salto de Rengar aumenta en 125. 12 trofeos: La duración de Emoción por la cacería aumenta 5 s. 20 trofeos: La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en sigilo.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3422,
            "name": "Cabeza de Kha'Zix"
        },
        "3455": {
            "stats": {},
            "description": "<unique>Pasiva ÚNICA, Recuerdos de Caza:</unique> Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo.<br><br><passive>3 trofeos:</passive> Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza .<br><passive>6 trofeos:</passive>El alcance del Salto de Rengar aumenta en 125.<br><passive>12 trofeos:</passive> La duración de Emoción por la cacería aumenta 5 s.<br><passive>20 trofeos:</passive> La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en sigilo.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "image": {
                "full": "3455.png",
                "group": "item",
                "sprite": "item1.png",
                "h": 48,
                "w": 48,
                "y": 432,
                "x": 432
            },
            "sanitizedDescription": "Pasiva ÚNICA, Recuerdos de Caza: Rengar reúne trofeos al matar a campeones y obtiene efectos adicionales según el número de trofeos que haya conseguido. Los asesinatos y las ayudas aportan 1 trofeo. 3 trofeos: Rengar obtiene 25 de velocidad de movimiento cuando no está combatiendo o se halla en la maleza . 6 trofeos:El alcance del Salto de Rengar aumenta en 125. 12 trofeos: La duración de Emoción por la cacería aumenta 5 s. 20 trofeos: La velocidad de movimiento de Emoción por la cacería se multiplica por dos cuando está en sigilo.",
            "effect": {
                "Effect1Amount": "25",
                "Effect2Amount": "125",
                "Effect3Amount": "5"
            },
            "inStore": false,
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Rengar",
            "hideFromAll": true,
            "specialRecipe": 3169,
            "id": 3455,
            "name": "Cabeza de Kha'Zix"
        },
        "3460": {
            "stats": {},
            "description": "<unique>Activa:</unique> Usa el talismán para teleportarte a una de las plataformas de batalla. Solo se puede usar desde la plataforma de invocación.<br><br><i><font color='#FDD017'>''Es en el precipicio de la magia donde el campeón se disuelve y, vuelto a forjar, adquiere nuevo poder.''</font></i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket"
            ],
            "image": {
                "full": "3460.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 0
            },
            "sanitizedDescription": "Activa: Usa el talismán para teleportarte a una de las plataformas de batalla. Solo se puede usar desde la plataforma de invocación. ''Es en el precipicio de la magia donde el campeón se disuelve y, vuelto a forjar, adquiere nuevo poder.''",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3460,
            "name": "Trascendencia dorada"
        },
        "3461": {
            "stats": {},
            "description": "<unique>Activa:</unique> Usa el talismán para teleportarte a una de las plataformas de batalla. Solo se puede usar desde la plataforma de invocación.<br><br><i><font color='#FDD017'>''Es en el precipicio de la magia donde el campeón se disuelve y, vuelto a forjar, adquiere nuevo poder''.</font></i>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket"
            ],
            "image": {
                "full": "3461.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 48
            },
            "sanitizedDescription": "Activa: Usa el talismán para teleportarte a una de las plataformas de batalla. Solo se puede usar desde la plataforma de invocación. ''Es en el precipicio de la magia donde el campeón se disuelve y, vuelto a forjar, adquiere nuevo poder''.",
            "inStore": false,
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3461,
            "name": "Trascendencia dorada (no disponible)"
        },
        "3462": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><br><br><active>Activa:</active> Revela durante 3 s una zona pequeña que esté a menos de <font color='#FFFFF'>2500</font> de distancia. Los campeones enemigos encontrados serán visibles durante 5 s (enfriamiento de 60 s).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Revela brevemente una zona seleccionada cercana.",
            "image": {
                "full": "3462.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 96
            },
            "sanitizedDescription": "Limitado a 1 talismán. Activa: Revela durante 3 s una zona pequeña que esté a menos de 2500 de distancia. Los campeones enemigos encontrados serán visibles durante 5 s (enfriamiento de 60 s).",
            "effect": {
                "Effect1Amount": "2500",
                "Effect2Amount": "60",
                "Effect3Amount": "3",
                "Effect4Amount": "5",
                "Effect5Amount": "550"
            },
            "inStore": false,
            "colloq": "azul;",
            "maps": {
                "8": true,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3462,
            "name": "Piedra del vidente (talismán)"
        },
        "3504": {
            "from": [
                "3114",
                "3113"
            ],
            "description": "<stats>+60 de poder de habilidad<br>+10% de reducción de enfriamiento<br><mana>+50% de regeneración de maná básica </mana></stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de curación y escudo<br><unique>Pasiva ÚNICA:</unique> +8% de velocidad de movimiento<br><unique>Pasiva ÚNICA:</unique> Cuando usas tus curaciones o escudos con campeones aliados, les otorgas un 20% - 35% de velocidad de ataque y sus ataques absorben 20 - 35 de vida al golpear durante 6 s.<br><br><rules>(No afecta a los efectos de regeneración o efectos sobre ti mismo. Los efectos adicionales dependen del nivel de objetivo).</rules></rules>",
            "gold": {
                "total": 2300,
                "sell": 1610,
                "base": 650,
                "purchasable": true
            },
            "tags": [
                "CooldownReduction",
                "ManaRegen",
                "NonbootsMovement",
                "SpellDamage"
            ],
            "plaintext": "Los escudos y efectos de curación en otras unidades les otorgan velocidad de ataque y sus ataques absorben vida.",
            "image": {
                "full": "3504.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 144
            },
            "sanitizedDescription": "+60 de poder de habilidad +10% de reducción de enfriamiento +50% de regeneración de maná básica Pasiva ÚNICA: +10% de curación y escudo Pasiva ÚNICA: +8% de velocidad de movimiento Pasiva ÚNICA: Cuando usas tus curaciones o escudos con campeones aliados, les otorgas un 20% - 35% de velocidad de ataque y sus ataques absorben 20 - 35 de vida al golpear durante 6 s. (No afecta a los efectos de regeneración o efectos sobre ti mismo. Los efectos adicionales dependen del nivel de objetivo).",
            "effect": {
                "Effect3Amount": "6",
                "Effect1Amount": "0.08",
                "Effect2Amount": "0.2",
                "Effect6Amount": "0.35",
                "Effect4Amount": "20",
                "Effect7Amount": "35",
                "Effect5Amount": "0.1"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMagicDamageMod": 60
            },
            "id": 3504,
            "name": "Incensario ardiente"
        },
        "3508": {
            "from": [
                "1038",
                "3133",
                "1018"
            ],
            "description": "<stats>+70 de daño de ataque<br>+20% de probabilidad de impacto crítico</stats><br><br><unique>Pasiva ÚNICA:</unique> +10% de reducción de enfriamiento.<br><unique>Pasiva ÚNICA:</unique> Gana cada vez más reducción de enfriamiento con la probabilidad de impacto crítico que ofrecen otras fuentes (máximo: +20% de reducción de enfriamiento adicional con el 30% de probabilidad de impacto crítico).<br><unique>Pasiva ÚNICA:</unique> Los impactos críticos restauran un 3% de tu reserva máxima de maná.",
            "gold": {
                "total": 3400,
                "sell": 2380,
                "base": 200,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "CriticalStrike",
                "ManaRegen",
                "CooldownReduction"
            ],
            "plaintext": "Los impactos críticos otorgan reducción de enfriamiento y maná.",
            "image": {
                "full": "3508.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 192
            },
            "sanitizedDescription": "+70 de daño de ataque +20% de probabilidad de impacto crítico Pasiva ÚNICA: +10% de reducción de enfriamiento. Pasiva ÚNICA: Gana cada vez más reducción de enfriamiento con la probabilidad de impacto crítico que ofrecen otras fuentes (máximo: +20% de reducción de enfriamiento adicional con el 30% de probabilidad de impacto crítico). Pasiva ÚNICA: Los impactos críticos restauran un 3% de tu reserva máxima de maná.",
            "effect": {
                "Effect3Amount": "0.2",
                "Effect1Amount": "0.1",
                "Effect2Amount": "0.03",
                "Effect6Amount": "0.1667",
                "Effect4Amount": "0.3",
                "Effect5Amount": "0.0167"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 70,
                "FlatCritChanceMod": 0.2
            },
            "id": 3508,
            "name": "Segador de esencia"
        },
        "3512": {
            "from": [
                "2053",
                "1057"
            ],
            "description": "<stats>+55 armadura<br>+55 resistencia mágica<br>+125% regeneración de vida básica <br></stats><br><unique>Pasiva ÚNICA, Corredor entre Puntos:</unique> Proporciona hasta +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, incluso las destruidas, y Puertas del Vacío.<br><active>Activa ÚNICA:</active> Genera una <a href='VoidGate'>Puerta del Vacío</a> durante 120 s (120 s de enfriamiento).<br><br>Cada 4 s genera una <a href='Voidspawn'>criatura del Vacío</a>. La primera, y cada cuarta criatura a partir de ella, ganan un 15% de su vida máxima en forma de daño.",
            "gold": {
                "total": 2700,
                "sell": 1890,
                "base": 1080,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "HealthRegen",
                "Armor",
                "Active",
                "NonbootsMovement"
            ],
            "plaintext": "Crea una Puerta del Vacío capaz de generar criaturas del Vacío con las que avanzar en las calles.",
            "image": {
                "full": "3512.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 240
            },
            "sanitizedDescription": "+55 armadura +55 resistencia mágica +125% regeneración de vida básica Pasiva ÚNICA, Corredor entre Puntos: Proporciona hasta +20% de velocidad de movimiento a lo largo de 2 s cerca de torretas, incluso las destruidas, y Puertas del Vacío. Activa ÚNICA: Genera una Puerta del Vacío durante 120 s (120 s de enfriamiento). Cada 4 s genera una criatura del Vacío. La primera, y cada cuarta criatura a partir de ella, ganan un 15% de su vida máxima en forma de daño.",
            "effect": {
                "Effect3Amount": "50",
                "Effect15Amount": "2",
                "Effect1Amount": "20",
                "Effect2Amount": "4",
                "Effect14Amount": "50",
                "Effect12Amount": "100",
                "Effect9Amount": "3",
                "Effect11Amount": "2",
                "Effect4Amount": "0",
                "Effect6Amount": "120",
                "Effect7Amount": "0.5",
                "Effect8Amount": "0.15",
                "Effect13Amount": "20",
                "Effect10Amount": "20",
                "Effect5Amount": "120"
            },
            "colloq": "Puerta del Vacío",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 55,
                "FlatArmorMod": 55
            },
            "id": 3512,
            "name": "Portal Zz'Rot"
        },
        "3513": {
            "stats": {},
            "description": "<br><unique>Pasiva ÚNICA - Vestigio del Vacío:</unique>El portador del Ojo del Heraldo tiene una retirada potenciada.<br><br><active>Activa ÚNICA:</active> Se canaliza durante 3.5 s para aplastar el Ojo del Heraldo, lo que invoca al Heraldo de la Grieta para que asedie las torretas enemigas.<br><br>El Ojo del Heraldo se perderá en el vacío si no se usa en 240 s.</font>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Trinket",
                "Active"
            ],
            "plaintext": "Ojo del Heraldo, un regalo del Vacío.",
            "image": {
                "full": "3513.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 288
            },
            "sanitizedDescription": "Pasiva ÚNICA - Vestigio del Vacío:El portador del Ojo del Heraldo tiene una retirada potenciada. Activa ÚNICA: Se canaliza durante 3.5 s para aplastar el Ojo del Heraldo, lo que invoca al Heraldo de la Grieta para que asedie las torretas enemigas. El Ojo del Heraldo se perderá en el vacío si no se usa en 240 s.",
            "effect": {
                "Effect1Amount": "240",
                "Effect2Amount": "3.5",
                "Effect3Amount": "40"
            },
            "inStore": false,
            "colloq": "Ojo del Heraldo",
            "consumed": true,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3513,
            "name": "Ojo del Heraldo"
        },
        "3599": {
            "stats": {},
            "description": "<stats></stats><br><active>Activa:</active> Ofrece un pacto a un aliado durante el resto de la partida, lo que os convierte en Juramentados. Juramentado potencia a ambos campeones mientras estéis cerca el uno del otro.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Active"
            ],
            "plaintext": "La lanza de Kalista, que la vincula a un Juramentado.",
            "image": {
                "full": "3599.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 336
            },
            "sanitizedDescription": "Activa: Ofrece un pacto a un aliado durante el resto de la partida, lo que os convierte en Juramentados. Juramentado potencia a ambos campeones mientras estéis cerca el uno del otro.",
            "colloq": "lanza",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "requiredChampion": "Kalista",
            "id": 3599,
            "name": "La lanza negra"
        },
        "3630": {
            "stats": {},
            "description": "<unique>Activa:</unique> Usa el talismán para teleportarte a una de las plataformas de tu equipo. Solo se puede usar desde la plataforma de invocación.",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3630.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 384
            },
            "sanitizedDescription": "Activa: Usa el talismán para teleportarte a una de las plataformas de tu equipo. Solo se puede usar desde la plataforma de invocación.",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3630,
            "name": "Traslación de asedio"
        },
        "3631": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Despliega una balista que dispara a la torreta más cercana.</font><br><br>Coloca una balista de largo alcance si está a 2200 unidades de distancia de una torreta enemiga. Después de un retardo de 5 s, comenzará a disparar a la torreta más cercana y le infligirá gran cantidad de daño. Si la torreta objetivo desaparece, también lo hará la balista.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Coloca una balista antitorretas de largo alcance.",
            "image": {
                "full": "3631.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 0,
                "x": 432
            },
            "sanitizedDescription": "Despliega una balista que dispara a la torreta más cercana. Coloca una balista de largo alcance si está a 2200 unidades de distancia de una torreta enemiga. Después de un retardo de 5 s, comenzará a disparar a la torreta más cercana y le infligirá gran cantidad de daño. Si la torreta objetivo desaparece, también lo hará la balista.",
            "effect": {
                "Effect3Amount": "20",
                "Effect1Amount": "5",
                "Effect2Amount": "5",
                "Effect6Amount": "2200",
                "Effect9Amount": "0.5",
                "Effect4Amount": "3",
                "Effect7Amount": "10",
                "Effect8Amount": "0",
                "Effect5Amount": "0"
            },
            "consumed": true,
            "id": 3631,
            "name": "Balista de asedio"
        },
        "3632": {
            "stats": {},
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3632.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 0
            },
            "effect": {
                "Effect3Amount": "310",
                "Effect1Amount": "15",
                "Effect2Amount": "1",
                "Effect6Amount": "0",
                "Effect12Amount": "3000",
                "Effect9Amount": "10",
                "Effect11Amount": "15",
                "Effect4Amount": "5000",
                "Effect7Amount": "3",
                "Effect8Amount": "45",
                "Effect10Amount": "1",
                "Effect5Amount": "20"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3632
        },
        "3633": {
            "stats": {},
            "description": "<unique>Activa:</unique> Usa el talismán para teleportarte a una de las plataformas de tu equipo. Solo se puede usar desde la plataforma de invocación.",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3633.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 48
            },
            "sanitizedDescription": "Activa: Usa el talismán para teleportarte a una de las plataformas de tu equipo. Solo se puede usar desde la plataforma de invocación.",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3633,
            "name": "Traslación de asedio"
        },
        "3634": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Fíjalo y luego vuelve a usarlo para disparar el rayo desde la torreta hacia el cursor.</font><br><br><font color='#FF9900'>Primer lanzamiento:</font> Fija a la torreta objetivo un dispositivo que puede disparar 3 veces un rayo asesino.<br></br><font color='#FF9900'>Siguientes tres lanzamientos:</font> Dispara el rayo hacia el cursor, de forma que inflige 30/nivel + 30% de la vida máxima del objetivo alcanzado (20% de daño contra súbditos) como daño mágico a todos los objetivos en una línea.<br></br><br></br>El dispositivo lanzarrayos desaparece tras 15 s o cuando se dispara 3 veces.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Fija a una torreta un dispositivo con el que se puede apuntar y disparar 3 veces un rayo.",
            "image": {
                "full": "3634.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 96
            },
            "sanitizedDescription": "Fíjalo y luego vuelve a usarlo para disparar el rayo desde la torreta hacia el cursor. Primer lanzamiento: Fija a la torreta objetivo un dispositivo que puede disparar 3 veces un rayo asesino. Siguientes tres lanzamientos: Dispara el rayo hacia el cursor, de forma que inflige 30/nivel + 30% de la vida máxima del objetivo alcanzado (20% de daño contra súbditos) como daño mágico a todos los objetivos en una línea. El dispositivo lanzarrayos desaparece tras 15 s o cuando se dispara 3 veces.",
            "effect": {
                "Effect3Amount": "3000",
                "Effect1Amount": "3",
                "Effect2Amount": "1.5",
                "Effect6Amount": "0.2",
                "Effect9Amount": "0",
                "Effect4Amount": "0",
                "Effect7Amount": "15",
                "Effect8Amount": "0.3",
                "Effect10Amount": "76",
                "Effect5Amount": "30"
            },
            "consumed": true,
            "id": 3634,
            "name": "Torre: Rayo de perdición"
        },
        "3635": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Despliega un objetivo de teleportación adicional.</font><br><br>Coloca una plataforma de teleportación en la ubicación objetivo. Tras un retardo de 4 s, se activa, lo que permite a tus aliados teleportarse a ella desde la base.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Crea otro punto al que tu equipo puede teleportarse.",
            "image": {
                "full": "3635.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 144
            },
            "sanitizedDescription": "Despliega un objetivo de teleportación adicional. Coloca una plataforma de teleportación en la ubicación objetivo. Tras un retardo de 4 s, se activa, lo que permite a tus aliados teleportarse a ella desde la base.",
            "effect": {
                "Effect1Amount": "4",
                "Effect2Amount": "1000",
                "Effect3Amount": "3",
                "Effect4Amount": "10"
            },
            "consumed": true,
            "id": 3635,
            "name": "Plataforma de teleportación"
        },
        "3636": {
            "consumeOnFull": true,
            "stats": {
                "FlatCritChanceMod": 3
            },
            "description": "<br><font color='#FF9900'>Hace que una torreta se vuelva invulnerable y que luego lance una tormenta de fuego.</font><br><br>Vuelve invulnerable a la torreta objetivo durante 6 s. Dos segundos antes de que acabe la invulnerabilidad, libera una descarga de misiles que infligen 2600 de daño verdadero durante el tiempo restante a todos los enemigos cercanos.<br><br>No se puede usar en la misma torreta más de una vez en 15 s.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Hace que una torreta se vuelva invulnerable mientras carga una poderosa andanada.",
            "image": {
                "full": "3636.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 192
            },
            "sanitizedDescription": "Hace que una torreta se vuelva invulnerable y que luego lance una tormenta de fuego. Vuelve invulnerable a la torreta objetivo durante 6 s. Dos segundos antes de que acabe la invulnerabilidad, libera una descarga de misiles que infligen 2600 de daño verdadero durante el tiempo restante a todos los enemigos cercanos. No se puede usar en la misma torreta más de una vez en 15 s.",
            "effect": {
                "Effect1Amount": "6",
                "Effect2Amount": "15",
                "Effect3Amount": "650",
                "Effect4Amount": "825",
                "Effect5Amount": "1.2"
            },
            "consumed": true,
            "id": 3636,
            "name": "Torre: Baluarte de tormenta"
        },
        "3637": {
            "stats": {},
            "description": "En Asedio del Nexo, los hechizos de invocador se sustituyen por casillas para armas de asedio. ¡Gasta fragmentos de cristal para comprar armas de asedio de un único uso en la tienda y luego usa los atajos de tus hechizos de invocador para activarlas!",
            "gold": {
                "total": 10,
                "sell": 7,
                "base": 10,
                "purchasable": false
            },
            "image": {
                "full": "3637.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 240
            },
            "sanitizedDescription": "En Asedio del Nexo, los hechizos de invocador se sustituyen por casillas para armas de asedio. ¡Gasta fragmentos de cristal para comprar armas de asedio de un único uso en la tienda y luego usa los atajos de tus hechizos de invocador para activarlas!",
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3637,
            "name": "Casilla para arma de asedio"
        },
        "3640": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Permite al equipo lanzar Destello repetidamente en una zona limitada.</font><br><br>Crea una zona mágica para tu equipo durante 5 s. En esa zona, tanto tus hechizos de invocador como los de tus aliados se reemplazan por un destello instantáneo que os transporta a cualquier ubicación de esa zona (1 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Os permite a tus aliados y a ti usar Destello una y otra vez en esa zona.",
            "image": {
                "full": "3640.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 288
            },
            "sanitizedDescription": "Permite al equipo lanzar Destello repetidamente en una zona limitada. Crea una zona mágica para tu equipo durante 5 s. En esa zona, tanto tus hechizos de invocador como los de tus aliados se reemplazan por un destello instantáneo que os transporta a cualquier ubicación de esa zona (1 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "1",
                "Effect2Amount": "5"
            },
            "consumed": true,
            "id": 3640,
            "name": "Zona de Destello"
        },
        "3641": {
            "stats": {},
            "description": "<br><font color='#FF9900'>Coloca un estandarte que le otorga mejoras a los súbditos.</font><br><br>Coloca un estandarte de vanguardia en la ubicación objetivo. Tras un retardo de 2 s, proporcionará a los súbditos cercanos una mejora que aumenta su daño un 50% y les otorga 50 de armadura y 100 de resistencia mágica mientras estén al alcance.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Fortalece a los súbditos cercanos.",
            "image": {
                "full": "3641.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 336
            },
            "sanitizedDescription": "Coloca un estandarte que le otorga mejoras a los súbditos. Coloca un estandarte de vanguardia en la ubicación objetivo. Tras un retardo de 2 s, proporcionará a los súbditos cercanos una mejora que aumenta su daño un 50% y les otorga 50 de armadura y 100 de resistencia mágica mientras estén al alcance.",
            "effect": {
                "Effect3Amount": "50",
                "Effect1Amount": "0",
                "Effect2Amount": "0.5",
                "Effect6Amount": "0.3",
                "Effect9Amount": "1400",
                "Effect4Amount": "100",
                "Effect7Amount": "2",
                "Effect8Amount": "10",
                "Effect5Amount": "5"
            },
            "consumed": true,
            "id": 3641,
            "name": "Estandarte de vanguardia"
        },
        "3642": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Reembolsa el precio completo de todas las armas de asedio compradas.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Reembolsa todas las armas de asedio actuales.",
            "image": {
                "full": "3642.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 384
            },
            "sanitizedDescription": "Reembolsa el precio completo de todas las armas de asedio compradas.",
            "effect": {
                "Effect1Amount": "1"
            },
            "consumed": true,
            "id": 3642,
            "name": "Reembolso de asedio"
        },
        "3643": {
            "consumeOnFull": true,
            "stats": {},
            "description": "<br><font color='#FF9900'>Aturde a los súbditos y ralentiza a los campeones en una zona.</font><br><br>Coloca un campo de entropía en la ubicación objetivo durante 5 s. Los súbditos enemigos y las balistas de asedio atrapadas en el campo no pueden moverse ni atacar. Los campeones enemigos en el campo ven reducida su velocidad de movimiento un 25%.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Coloca un campo que aturde a los súbditos enemigos y ralentiza a los campeones.",
            "image": {
                "full": "3643.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 48,
                "x": 432
            },
            "sanitizedDescription": "Aturde a los súbditos y ralentiza a los campeones en una zona. Coloca un campo de entropía en la ubicación objetivo durante 5 s. Los súbditos enemigos y las balistas de asedio atrapadas en el campo no pueden moverse ni atacar. Los campeones enemigos en el campo ven reducida su velocidad de movimiento un 25%.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "600",
                "Effect3Amount": "25"
            },
            "consumed": true,
            "id": 3643,
            "name": "Campo de entropía"
        },
        "3645": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 talismán.</groupLimit><br><br><active>Activa:</active> Revela durante 3 s una zona pequeña que esté a menos de <font color='#FFFFF'>1400</font> de distancia. Los campeones enemigos encontrados serán visibles durante 5 s (enfriamiento de 60 s).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "tags": [
                "Active",
                "Trinket",
                "Vision"
            ],
            "plaintext": "Revela brevemente una zona seleccionada cercana.",
            "image": {
                "full": "3645.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 0
            },
            "sanitizedDescription": "Limitado a 1 talismán. Activa: Revela durante 3 s una zona pequeña que esté a menos de 1400 de distancia. Los campeones enemigos encontrados serán visibles durante 5 s (enfriamiento de 60 s).",
            "effect": {
                "Effect1Amount": "1400",
                "Effect2Amount": "60",
                "Effect3Amount": "3",
                "Effect4Amount": "5",
                "Effect5Amount": "550"
            },
            "inStore": false,
            "colloq": "azul;",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3645,
            "name": "Piedra del vidente (talismán)"
        },
        "3647": {
            "stats": {},
            "description": "<br><font color='#FF9900'>Protege las armas de asedio cercanas.</font><br><br>Coloca un tótem de escudo en la ubicación objetivo. Tras 2 s, el tótem se activa y otorga un escudo de 2 (+1 por cada tótem de escudo adicional) a las armas de asedio cercanas.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "plaintext": "Otorga vida adicional a las armas de asedio cercanas.",
            "image": {
                "full": "3647.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 48
            },
            "sanitizedDescription": "Protege las armas de asedio cercanas. Coloca un tótem de escudo en la ubicación objetivo. Tras 2 s, el tótem se activa y otorga un escudo de 2 (+1 por cada tótem de escudo adicional) a las armas de asedio cercanas.",
            "effect": {
                "Effect3Amount": "2",
                "Effect1Amount": "2",
                "Effect2Amount": "3",
                "Effect6Amount": "0.25",
                "Effect9Amount": "4",
                "Effect4Amount": "1",
                "Effect7Amount": "10",
                "Effect8Amount": "1",
                "Effect5Amount": "1000"
            },
            "consumed": true,
            "id": 3647,
            "name": "Tótem de escudo"
        },
        "3648": {
            "stats": {},
            "name": "Traslación de asedio (inactiva)",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3648.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 96
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3648
        },
        "3649": {
            "stats": {},
            "description": "<groupLimit>Limitado a 1 Talismán.</groupLimit><br><br><active>Activa:</active> Coloca un <font color='#FFFFFF'>Guardián invisible</font> que dura <font color='#FFFFFF'>30</font> s (30 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": false
            },
            "image": {
                "full": "3649.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 144
            },
            "sanitizedDescription": "Limitado a 1 Talismán. Activa: Coloca un Guardián invisible que dura 30 s (30 s de enfriamiento).",
            "effect": {
                "Effect1Amount": "30"
            },
            "inStore": false,
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3649,
            "name": "Guardián de visión de asedio"
        },
        "3671": {
            "from": [
                "3133"
            ],
            "description": "<stats>+60 daño de ataque<br>+10% reducción de enfriamiento</stats>",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 525,
                "purchasable": true
            },
            "image": {
                "full": "3671.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 192
            },
            "sanitizedDescription": "+60 daño de ataque +10% reducción de enfriamiento",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatPhysicalDamageMod": 60
            },
            "id": 3671,
            "name": "Encantamiento: Guerrero"
        },
        "3672": {
            "from": [
                "3751"
            ],
            "description": "<stats>+325 vida<br>+15% vida adicional</stats><br><br><unique>Pasiva ÚNICA, Inmolar:</unique> En combate, inflige 7 (+2 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 100% de daño adicional a monstruos. ",
            "gold": {
                "total": 1425,
                "sell": 998,
                "base": 525,
                "purchasable": true
            },
            "image": {
                "full": "3672.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 240
            },
            "sanitizedDescription": "+325 vida +15% vida adicional Pasiva ÚNICA, Inmolar: En combate, inflige 7 (+2 por nivel del campeón) de daño mágico por segundo a los enemigos cercanos. Inflige un 100% de daño adicional a monstruos.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "FlatHPPoolMod": 325
            },
            "id": 3672,
            "name": "Encantamiento: Mole de ceniza"
        },
        "3673": {
            "from": [
                "3113",
                "1052"
            ],
            "description": "<stats>+60 poder de habilidad<br>+7% velocidad de movimiento</stats><br><br><unique>Pasiva ÚNICA, Eco:</unique> Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos.<br><br>Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 18% del maná que te falte.",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 340,
                "purchasable": true
            },
            "image": {
                "full": "3673.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 288
            },
            "sanitizedDescription": "+60 poder de habilidad +7% velocidad de movimiento Pasiva ÚNICA, Eco: Al moverse o utilizar hechizos se generan cargas. A las 100 cargas, el próximo hechizo que alcance y dañe a un enemigo consume todas las cargas e inflige 60 (+10% del poder de habilidad) de daño mágico adicional a un máximo de 4 objetivos. Este efecto inflige 250% de daño a monstruos gigantes. Golpear a un monstruo gigante con este efecto restaura un 18% del maná que te falte.",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentMovementSpeedMod": 0.07,
                "FlatMagicDamageMod": 60
            },
            "id": 3673,
            "name": "Encantamiento: Ecos rúnicos"
        },
        "3675": {
            "from": [
                "1043"
            ],
            "description": "<stats>+50% de velocidad de ataque</stats><br><br><unique>Pasiva ÚNICA:</unique> Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "gold": {
                "total": 1625,
                "sell": 1138,
                "base": 625,
                "purchasable": true
            },
            "image": {
                "full": "3675.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 336
            },
            "sanitizedDescription": "+50% de velocidad de ataque Pasiva ÚNICA: Los ataques básicos infligen, al impactar, un 4% de la vida máxima del objetivo como daño físico adicional (máximo de 75 contra monstruos y súbditos).",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "hideFromAll": true,
            "stats": {
                "PercentAttackSpeedMod": 0.5
            },
            "id": 3675,
            "name": "Encantamiento: Navaja de sangre"
        },
        "3680": {
            "stats": {},
            "description": "<active>Activa - <a href='FeedTheKing'>Alimentar al Rey</a>:</active> El Rey lanza proyectiles a los enemigos lejanos, cada uno de los cuales inflige <scaleLevel>213-775</scaleLevel> de daño mágico a los objetivos en el centro del impacto, que va disminuyendo hasta <scaleLevel>85-310</scaleLevel> en el caso de los objetivos de los bordes (120 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "Rey: dispara una descarga de artillería de hielo.",
            "image": {
                "full": "3680.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 384
            },
            "sanitizedDescription": "Activa - Alimentar al Rey: El Rey lanza proyectiles a los enemigos lejanos, cada uno de los cuales inflige 213-775 de daño mágico a los objetivos en el centro del impacto, que va disminuyendo hasta 85-310 en el caso de los objetivos de los bordes (120 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "40",
                "Effect1Amount": "5",
                "Effect2Amount": "120",
                "Effect6Amount": "213",
                "Effect9Amount": "310",
                "Effect4Amount": "15",
                "Effect7Amount": "775",
                "Effect8Amount": "85",
                "Effect5Amount": "250"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3680,
            "name": "Snack escarchado"
        },
        "3681": {
            "stats": {},
            "description": "<active>Activa - <a href='FeedTheKing'>Alimentar al Rey</a>:</active> El Rey escupe fuego durante 4 s e inflige <scaleLevel>705-1479</scaleLevel> de daño verdadero a los enemigos dentro del cono de ataque a lo largo de su duración. Inflige hasta 560 de daño verdadero a las torretas (120 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "Rey: dispara llamas que queman las unidades y torretas.",
            "image": {
                "full": "3681.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 96,
                "x": 432
            },
            "sanitizedDescription": "Activa - Alimentar al Rey: El Rey escupe fuego durante 4 s e inflige 705-1479 de daño verdadero a los enemigos dentro del cono de ataque a lo largo de su duración. Inflige hasta 560 de daño verdadero a las torretas (120 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "700",
                "Effect1Amount": "4",
                "Effect2Amount": "120",
                "Effect6Amount": "705",
                "Effect4Amount": "2.35",
                "Effect7Amount": "1479",
                "Effect5Amount": "560"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3681,
            "name": "Snack superpicante"
        },
        "3682": {
            "stats": {},
            "description": "<active>Activa - <a href='FeedTheKing'>Alimentar al Rey</a>:</active> El Rey Poro salta en el aire y aterriza dos veces, golpeando a los enemigos en el camino e infligiendo <scaleLevel>40-190</scaleLevel> de daño físico. El Rey también obtiene un escudo equivalente al <font color='#FF3300'>20% de su vida máxima</font>, que dura 4 s (30 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "Rey: derriba y recibe un gran escudo.",
            "image": {
                "full": "3682.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 0
            },
            "sanitizedDescription": "Activa - Alimentar al Rey: El Rey Poro salta en el aire y aterriza dos veces, golpeando a los enemigos en el camino e infligiendo 40-190 de daño físico. El Rey también obtiene un escudo equivalente al 20% de su vida máxima, que dura 4 s (30 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "10",
                "Effect1Amount": "1.8",
                "Effect2Amount": "30",
                "Effect6Amount": "4",
                "Effect9Amount": "190",
                "Effect4Amount": "10",
                "Effect7Amount": "600",
                "Effect8Amount": "40",
                "Effect10Amount": "500",
                "Effect5Amount": "20"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3682,
            "name": "Snack expreso"
        },
        "3683": {
            "stats": {},
            "description": "<active>Activa - <a href='FeedTheKing'>Alimentar al Rey</a>:</active> El Rey lanza muchos snacks detrás de los enemigos, lo que atrae a los poros hacia él. Los campeones enemigos golpeados serán arrastrados y recibirán <scaleLevel>230-680</scaleLevel> de daño físico (120 s de enfriamiento).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "tags": [
                "Trinket",
                "Lane"
            ],
            "plaintext": "Rey: los poros empujan a los enemigos hacia él.",
            "image": {
                "full": "3683.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 48
            },
            "sanitizedDescription": "Activa - Alimentar al Rey: El Rey lanza muchos snacks detrás de los enemigos, lo que atrae a los poros hacia él. Los campeones enemigos golpeados serán arrastrados y recibirán 230-680 de daño físico (120 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "140",
                "Effect1Amount": "6",
                "Effect2Amount": "120",
                "Effect6Amount": "1500",
                "Effect9Amount": "230",
                "Effect11Amount": "2",
                "Effect4Amount": "30",
                "Effect7Amount": "1650",
                "Effect8Amount": "1000",
                "Effect10Amount": "680",
                "Effect5Amount": "1"
            },
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": true,
                "14": false,
                "16": false
            },
            "id": 3683,
            "name": "¡Paquete de snacks arcoíris de fiesta!"
        },
        "3690": {
            "stats": {},
            "description": "<passive>Pasiva - Grillete cósmico: </passive>Sentencia de muerte atrae mucho más lejos (según la vida que le falte al objetivo) y la estrella oscura puede prenderla para infligir más daño.<br><br><flavorText>''Un amanecer más glorioso aguarda''.</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3690.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 96
            },
            "sanitizedDescription": "Pasiva - Grillete cósmico: Sentencia de muerte atrae mucho más lejos (según la vida que le falte al objetivo) y la estrella oscura puede prenderla para infligir más daño. ''Un amanecer más glorioso aguarda''.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3690,
            "name": "Grillete cósmico"
        },
        "3691": {
            "stats": {},
            "description": "<passive>Pasiva - Linterna de singularidad: </passive>Camino oscuro salva automáticamente a los aliados deshabilitados. No obstante, ya no otorga un escudo.<br><br><flavorText>''Las estrellas nos llaman''.</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3691.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 144
            },
            "sanitizedDescription": "Pasiva - Linterna de singularidad: Camino oscuro salva automáticamente a los aliados deshabilitados. No obstante, ya no otorga un escudo. ''Las estrellas nos llaman''.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3691,
            "name": "Linterna de singularidad"
        },
        "3692": {
            "stats": {},
            "description": "<passive>Pasiva - Guadaña de Materia oscura: </passive>Las cargas de la pasiva de Despellejar al golpear infligen daño muy rápido. Despellejar lanza a los enemigos mucho más lejos (según la vida que les falte).<br><br><flavorText>''Si quieres crear una singularidad desde cero, primero debes destruir el universo''.</flavorText>",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3692.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 192
            },
            "sanitizedDescription": "Pasiva - Guadaña de Materia oscura: Las cargas de la pasiva de Despellejar al golpear infligen daño muy rápido. Despellejar lanza a los enemigos mucho más lejos (según la vida que les falte). ''Si quieres crear una singularidad desde cero, primero debes destruir el universo''.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3692,
            "name": "Guadaña de materia oscura"
        },
        "3693": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Pasiva - Conversión en masa: </passive>La vida de Thresh representa cuánta distancia avanzará con los empujones y tirones del enemigo. Cuanta menos vida tenga, más lejos será lanzado.<br><br><passive>Pasiva - Moradores del final: </passive>Los escurridizos del abismo emergen periódicamente y se apresuran hacia la estrella oscura al ser atacados. Las perturbaciones gravitacionales atraerán a muchos de ellos temporalmente.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3693.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 240
            },
            "sanitizedDescription": "Pasiva - Conversión en masa: La vida de Thresh representa cuánta distancia avanzará con los empujones y tirones del enemigo. Cuanta menos vida tenga, más lejos será lanzado. Pasiva - Moradores del final: Los escurridizos del abismo emergen periódicamente y se apresuran hacia la estrella oscura al ser atacados. Las perturbaciones gravitacionales atraerán a muchos de ellos temporalmente.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3693,
            "name": "Botas de gravedad"
        },
        "3694": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Pasiva - Espíritu estelar: </passive>Al aparecer, Thresh es invulnerable, no se le puede atacar, no puede lanzar hechizos y es capaz de viajar por el espacio abierto. Esta capacidad se pierde al pisar el suelo firme.<br><br>Ser salvado por Camino oscuro o usar Sentencia de muerte en una de las tres <font color='#3091ec'>anclas gravitatorias</font> te pondrá brevemente en este estado invulnerable y romperá las cadenas enemigas.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3694.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 288
            },
            "sanitizedDescription": "Pasiva - Espíritu estelar: Al aparecer, Thresh es invulnerable, no se le puede atacar, no puede lanzar hechizos y es capaz de viajar por el espacio abierto. Esta capacidad se pierde al pisar el suelo firme. Ser salvado por Camino oscuro o usar Sentencia de muerte en una de las tres anclas gravitatorias te pondrá brevemente en este estado invulnerable y romperá las cadenas enemigas.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3694,
            "name": "Capa de estrellas"
        },
        "3695": {
            "stats": {
                "FlatMovementSpeedMod": 50
            },
            "description": "<passive>Pasiva - Fidelidad estelar: </passive>Thresh no puede matar unidades directamente; sus almas, experiencia y oro pertenecen a la estrella oscura.<br><br>Al atraer o empujar a un enemigo a la estrella oscura, este es destruido al instante, lo que concede puntos a tu equipo (+5 o +1 por los escurridizos del abismo).<br><br>Hacen falta 100 puntos para ganar una ronda; además, los puntos finales deben provenir de un asesinato de campeón.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "image": {
                "full": "3695.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 336
            },
            "sanitizedDescription": "Pasiva - Fidelidad estelar: Thresh no puede matar unidades directamente; sus almas, experiencia y oro pertenecen a la estrella oscura. Al atraer o empujar a un enemigo a la estrella oscura, este es destruido al instante, lo que concede puntos a tu equipo (+5 o +1 por los escurridizos del abismo). Hacen falta 100 puntos para ganar una ronda; además, los puntos finales deben provenir de un asesinato de campeón.",
            "maps": {
                "8": false,
                "10": false,
                "11": false,
                "12": false,
                "14": false,
                "16": false
            },
            "id": 3695,
            "name": "Sello de estrella oscura"
        },
        "3706": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limitado a 1 objeto de la jungla.</groupLimit><br><br><stats>+10% de robo de vida contra monstruos<br><mana>+225% de regeneración de maná básica en la jungla</mana></stats><br><br><unique>Pasiva ÚNICA, Aplastamiento desalentador:</unique> Se puede lanzar Aplastar contra campeones enemigos, lo que les inflige daño verdadero reducido y les roba un 20% de su velocidad de movimiento durante 2 s. <br><unique>Pasiva ÚNICA, Diente/Uña:</unique> El campeón inflige 25 de daño adicional a monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar monstruos otorga <font color='#99BBBB'><a href='SpecialJungleExperience'>experiencia adicional especial</a></font>.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "Slow",
                "OnHit",
                "NonbootsMovement",
                "Jungle"
            ],
            "plaintext": "Permite ralentizar campeones con Aplastar",
            "image": {
                "full": "3706.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 384
            },
            "sanitizedDescription": "Limitado a 1 objeto de la jungla. +10% de robo de vida contra monstruos +225% de regeneración de maná básica en la jungla Pasiva ÚNICA, Aplastamiento desalentador: Se puede lanzar Aplastar contra campeones enemigos, lo que les inflige daño verdadero reducido y les roba un 20% de su velocidad de movimiento durante 2 s. Pasiva ÚNICA, Diente/Uña: El campeón inflige 25 de daño adicional a monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar monstruos otorga experiencia adicional especial.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "-0.2",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "2",
                "Effect8Amount": "3",
                "Effect5Amount": "30"
            },
            "colloq": "jungla;Jungla;jangle",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1400",
                "1401",
                "1402",
                "1416"
            ],
            "stats": {},
            "id": 3706,
            "name": "Espada del acechador"
        },
        "3711": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limitado a 1 objeto de la jungla.</groupLimit><br><br><stats>+10% de robo de vida contra monstruos<br><mana>+225% de regeneración de maná básica en la jungla</mana></stats><br><br><unique>Pasiva ÚNICA - Diente/Uña:</unique> Los ataques básicos infligen 25 de daño adicional a monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar a monstruos otorga <font color='#99BBBB'><a href='SpecialJungleExperience'>experiencia adicional especial</a></font>.<br><active>Activa ÚNICA - Vigilancia:</active> Consume una carga para colocar un <font color='#BBFFFF'>Guardián invisible</font> que revelará la zona circundante durante 150 s. Puede contener hasta 2 cargas que se recuperan al visitar la tienda. <br><br><rules>(Un jugador podrá tener solo 3 <font color='#BBFFFF'>Guardianes invisibles</font> a la vez en el mapa. Las pasivas únicas con el mismo nombre no se acumulan)</rules>",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "Vision",
                "Active",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Proporciona Guardianes invisibles a lo largo del tiempo.",
            "image": {
                "full": "3711.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 144,
                "x": 432
            },
            "sanitizedDescription": "Limitado a 1 objeto de la jungla. +10% de robo de vida contra monstruos +225% de regeneración de maná básica en la jungla Pasiva ÚNICA - Diente/Uña: Los ataques básicos infligen 25 de daño adicional a monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar a monstruos otorga experiencia adicional especial. Activa ÚNICA - Vigilancia: Consume una carga para colocar un Guardián invisible que revelará la zona circundante durante 150 s. Puede contener hasta 2 cargas que se recuperan al visitar la tienda. (Un jugador podrá tener solo 3 Guardianes invisibles a la vez en el mapa. Las pasivas únicas con el mismo nombre no se acumulan)",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "30",
                "Effect10Amount": "150",
                "Effect5Amount": "30"
            },
            "colloq": "jungla;Jungla",
            "maps": {
                "8": false,
                "10": false,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1408",
                "1409",
                "1410",
                "1418"
            ],
            "stats": {},
            "id": 3711,
            "name": "Cuchillo de furtivo"
        },
        "3715": {
            "from": [
                "1039",
                "1041"
            ],
            "description": "<groupLimit>Limitado a un objeto de la jungla</groupLimit><br><br><stats>+10% de robo de vida contra monstruos<br><mana>+225% de regeneración de maná básica en la jungla</mana></stats><br><br><passive>Pasiva, Aplastamiento desafiante:</passive> Se puede lanzar Aplastar sobre campeones enemigos para marcarlos durante 4 s. Mientras esté marcado, el objetivo queda revelado, tus ataques básicos le infligen daño verdadero adicional durante 3 s y te causa un 20% menos de daño.<br><unique>Pasiva ÚNICA, Diente/Uña:</unique> Los ataques básicos infligen 25 de daño adicional contra monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar monstruos otorga <font color='#99BBBB'><a href='SpecialJungleExperience'>experiencia adicional especial</a></font>.",
            "gold": {
                "total": 1000,
                "sell": 700,
                "base": 300,
                "purchasable": true
            },
            "tags": [
                "LifeSteal",
                "ManaRegen",
                "OnHit",
                "Jungle"
            ],
            "plaintext": "Te permite usar Aplastar para marcar campeones, con lo que recibes poderes de combate contra ellos.",
            "image": {
                "full": "3715.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 0
            },
            "sanitizedDescription": "Limitado a un objeto de la jungla +10% de robo de vida contra monstruos +225% de regeneración de maná básica en la jungla Pasiva, Aplastamiento desafiante: Se puede lanzar Aplastar sobre campeones enemigos para marcarlos durante 4 s. Mientras esté marcado, el objetivo queda revelado, tus ataques básicos le infligen daño verdadero adicional durante 3 s y te causa un 20% menos de daño. Pasiva ÚNICA, Diente/Uña: Los ataques básicos infligen 25 de daño adicional contra monstruos. Al dañar a un monstruo con un hechizo o un ataque se le roba 30 de vida a lo largo de 5 s. Matar monstruos otorga experiencia adicional especial.",
            "effect": {
                "Effect3Amount": "2.25",
                "Effect1Amount": "30",
                "Effect2Amount": "25",
                "Effect6Amount": "3",
                "Effect9Amount": "0.1",
                "Effect4Amount": "5",
                "Effect7Amount": "20",
                "Effect8Amount": "18",
                "Effect10Amount": "4",
                "Effect5Amount": "30"
            },
            "colloq": "jungla;Jungla",
            "maps": {
                "8": false,
                "10": true,
                "11": true,
                "12": false,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "1412",
                "1413",
                "1414",
                "1419"
            ],
            "stats": {},
            "id": 3715,
            "name": "Sable de escaramuza"
        },
        "3742": {
            "from": [
                "1031",
                "1011"
            ],
            "description": "<stats>+425 de vida<br>+60 de armadura</stats><br><br><unique>Pasiva ÚNICA - Dreadnought:</unique> Mientras te mueves vas acumulando impulso, lo que aumenta tu velocidad de movimiento hasta 60 puntos a las 100 acumulaciones. El Impulso decrece con rapidez cuando la unidad sufre efectos de ralentización, aturdimiento, provocación, miedo, polimorfismo o inmovilización, además de cuando lanza ataques básicos.<br><unique>Pasiva ÚNICA - Golpe aplastante:</unique> Los ataques básicos con 100 acumulaciones infligen 100 de daño adicional y gastan las acumulaciones. Si el atacante es una unidad cuerpo a cuerpo, también ralentizan al objetivo un 50% durante 1 s.<br><br><flavorText>''Solo hay un modo de que me arrebates esta armadura...''. - Nombre olvidado</flavorText>",
            "gold": {
                "total": 2900,
                "sell": 2030,
                "base": 1100,
                "purchasable": true
            },
            "tags": [
                "Health",
                "Armor",
                "OnHit",
                "NonbootsMovement",
                "Bilgewater"
            ],
            "plaintext": "Al moverte vas ganando Impulso que puedes descargar contra tus enemigos.",
            "image": {
                "full": "3742.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 48
            },
            "sanitizedDescription": "+425 de vida +60 de armadura Pasiva ÚNICA - Dreadnought: Mientras te mueves vas acumulando impulso, lo que aumenta tu velocidad de movimiento hasta 60 puntos a las 100 acumulaciones. El Impulso decrece con rapidez cuando la unidad sufre efectos de ralentización, aturdimiento, provocación, miedo, polimorfismo o inmovilización, además de cuando lanza ataques básicos. Pasiva ÚNICA - Golpe aplastante: Los ataques básicos con 100 acumulaciones infligen 100 de daño adicional y gastan las acumulaciones. Si el atacante es una unidad cuerpo a cuerpo, también ralentizan al objetivo un 50% durante 1 s. ''Solo hay un modo de que me arrebates esta armadura...''. - Nombre olvidado",
            "effect": {
                "Effect1Amount": "60",
                "Effect2Amount": "100",
                "Effect3Amount": "2",
                "Effect4Amount": "-0.5",
                "Effect5Amount": "1"
            },
            "colloq": "titán;dreadnought",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatArmorMod": 60,
                "FlatHPPoolMod": 425
            },
            "id": 3742,
            "name": "Coraza del muerto"
        },
        "3748": {
            "from": [
                "3077",
                "1028",
                "3052"
            ],
            "description": "<stats>+450 vida<br>+35 daño de ataque<br>+100% regeneración de vida básica </stats><br><br><unique>Pasiva ÚNICA - Hender:</unique> Los ataques básicos infligen 5 + 1% de tu vida máxima como daño físico adicional al objetivo y 40 + 2.5% de tu vida máxima como daño físico a los demás enemigos en un arco a su alrededor.<br><active>Activa ÚNICA - Creciente:</active> En tu próximo ataque básico, el daño de Hender a todos los objetivos se incrementa hasta 40 + 10% de tu vida máxima como daño físico adicional dentro de un arco más grande (20 s de enfriamiento).<br><br><rules>(Las pasivas únicas con el mismo nombre no se acumulan).</rules>",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 700,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Damage",
                "Active",
                "OnHit"
            ],
            "plaintext": "Causa daño de área en función de la vida del propietario.",
            "image": {
                "full": "3748.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 96
            },
            "sanitizedDescription": "+450 vida +35 daño de ataque +100% regeneración de vida básica Pasiva ÚNICA - Hender: Los ataques básicos infligen 5 + 1% de tu vida máxima como daño físico adicional al objetivo y 40 + 2.5% de tu vida máxima como daño físico a los demás enemigos en un arco a su alrededor. Activa ÚNICA - Creciente: En tu próximo ataque básico, el daño de Hender a todos los objetivos se incrementa hasta 40 + 10% de tu vida máxima como daño físico adicional dentro de un arco más grande (20 s de enfriamiento). (Las pasivas únicas con el mismo nombre no se acumulan).",
            "effect": {
                "Effect3Amount": "0",
                "Effect1Amount": "0.025",
                "Effect2Amount": "40",
                "Effect6Amount": "0",
                "Effect9Amount": "0.01",
                "Effect4Amount": "0",
                "Effect7Amount": "20",
                "Effect8Amount": "40",
                "Effect10Amount": "5",
                "Effect5Amount": "0.1"
            },
            "colloq": "coloso",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 35,
                "FlatHPPoolMod": 450
            },
            "id": 3748,
            "name": "Hidra titánica"
        },
        "3751": {
            "from": [
                "1028"
            ],
            "description": "<stats>+200 vida</stats><br><br><unique>Pasiva ÚNICA, Inmolar:</unique> Inflige 5 (+1 por nivel del personaje) de daño mágico por segundo a los enemigos cercanos. Inflige un 100% de daño adicional a súbditos y monstruos.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 500,
                "purchasable": true
            },
            "tags": [
                "Health"
            ],
            "plaintext": "Otorga vida y Aura de Inmolar",
            "image": {
                "full": "3751.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 144
            },
            "sanitizedDescription": "+200 vida Pasiva ÚNICA, Inmolar: Inflige 5 (+1 por nivel del personaje) de daño mágico por segundo a los enemigos cercanos. Inflige un 100% de daño adicional a súbditos y monstruos.",
            "effect": {
                "Effect1Amount": "5",
                "Effect2Amount": "1",
                "Effect3Amount": "100"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3068",
                "1401",
                "1409",
                "1413",
                "3672"
            ],
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3751,
            "name": "Rescoldo de Bami"
        },
        "3800": {
            "from": [
                "3024",
                "3801"
            ],
            "description": "<stats>+400 de vida<br><mana>+300 de maná</mana><br>+30 de armadura<br>+100% de regeneración de vida básica <br>+10% de reducción de enfriamiento</stats><br><br><unique>Activa ÚNICA:</unique> Otorga un 75% de velocidad de movimiento al moverse hacia unidades o torres enemigas durante 4 s. Cerca de un enemigo (o al cabo de 4 s), la unidad emite una onda de choque que reduce un 75% la velocidad de movimiento de los campeones enemigos durante 2 s (90 s de enfriamiento).",
            "gold": {
                "total": 2500,
                "sell": 1750,
                "base": 950,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen",
                "Armor",
                "Mana",
                "Active",
                "CooldownReduction",
                "Slow",
                "NonbootsMovement"
            ],
            "plaintext": "Otorga vida, maná y armadura. Actívalo para acelerar hacia el enemigo y ralentizarlo.",
            "image": {
                "full": "3800.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 192
            },
            "sanitizedDescription": "+400 de vida +300 de maná +30 de armadura +100% de regeneración de vida básica +10% de reducción de enfriamiento Activa ÚNICA: Otorga un 75% de velocidad de movimiento al moverse hacia unidades o torres enemigas durante 4 s. Cerca de un enemigo (o al cabo de 4 s), la unidad emite una onda de choque que reduce un 75% la velocidad de movimiento de los campeones enemigos durante 2 s (90 s de enfriamiento).",
            "effect": {
                "Effect3Amount": "-0.75",
                "Effect1Amount": "0.75",
                "Effect2Amount": "4",
                "Effect6Amount": "225",
                "Effect4Amount": "2",
                "Effect7Amount": "450",
                "Effect5Amount": "90"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatArmorMod": 30,
                "FlatHPPoolMod": 400
            },
            "id": 3800,
            "name": "Gloria justiciera"
        },
        "3801": {
            "from": [
                "1028",
                "1006"
            ],
            "description": "<stats>+200 vida<br>+50% regeneración de vida básica </stats>",
            "gold": {
                "total": 650,
                "sell": 455,
                "base": 100,
                "purchasable": true
            },
            "tags": [
                "Health",
                "HealthRegen"
            ],
            "plaintext": "Otorga vida y regeneración de vida.",
            "image": {
                "full": "3801.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 240
            },
            "sanitizedDescription": "+200 vida +50% regeneración de vida básica",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3800",
                "3083",
                "3084",
                "3107"
            ],
            "stats": {
                "FlatHPPoolMod": 200
            },
            "id": 3801,
            "name": "Brazal cristalino"
        },
        "3802": {
            "from": [
                "1052",
                "1027"
            ],
            "description": "<stats>+25 de poder de habilidad<br><mana>+300 de maná</mana></stats><br><br><unique>Pasiva ÚNICA:</unique> Al subir de nivel, se recupera un 20% del maná máximo durante 3 s.",
            "gold": {
                "total": 900,
                "sell": 630,
                "base": 115,
                "purchasable": true
            },
            "tags": [
                "SpellDamage",
                "Mana",
                "ManaRegen"
            ],
            "plaintext": "Recupera maná al subir de nivel.",
            "image": {
                "full": "3802.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 288
            },
            "sanitizedDescription": "+25 de poder de habilidad +300 de maná Pasiva ÚNICA: Al subir de nivel, se recupera un 20% del maná máximo durante 3 s.",
            "effect": {
                "Effect3Amount": "15",
                "Effect1Amount": "25",
                "Effect2Amount": "-0.1",
                "Effect6Amount": "5",
                "Effect4Amount": "10",
                "Effect7Amount": "0.2",
                "Effect8Amount": "3",
                "Effect5Amount": "20"
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 2,
            "into": [
                "3165"
            ],
            "stats": {
                "FlatMPPoolMod": 300,
                "FlatMagicDamageMod": 25
            },
            "id": 3802,
            "name": "Capítulo perdido"
        },
        "3812": {
            "from": [
                "1053",
                "1037",
                "3133"
            ],
            "description": "<stats>+80 daño de ataque<br>+10% reducción de enfriamiento</stats><br><br><unique>Pasiva ÚNICA:</unique> Infligir daño físico cura un 15% del daño infligido. 33% de efectividad para el daño de área de efecto.<br><unique>Pasiva ÚNICA:</unique> El 30% del daño sufrido se fracciona como efecto de sangrado a lo largo de 3 s.",
            "gold": {
                "total": 3500,
                "sell": 2450,
                "base": 625,
                "purchasable": true
            },
            "tags": [
                "Damage",
                "LifeSteal",
                "CooldownReduction"
            ],
            "plaintext": "Hace que el daño recibido ahora se reciba más adelante.",
            "image": {
                "full": "3812.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 336
            },
            "sanitizedDescription": "+80 daño de ataque +10% reducción de enfriamiento Pasiva ÚNICA: Infligir daño físico cura un 15% del daño infligido. 33% de efectividad para el daño de área de efecto. Pasiva ÚNICA: El 30% del daño sufrido se fracciona como efecto de sangrado a lo largo de 3 s.",
            "effect": {
                "Effect1Amount": "0.15",
                "Effect2Amount": "0.3",
                "Effect3Amount": "3"
            },
            "stacks": 0,
            "colloq": "Bloodbag",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatPhysicalDamageMod": 80
            },
            "id": 3812,
            "name": "Baile de la muerte"
        },
        "3814": {
            "from": [
                "1037",
                "3134",
                "1033"
            ],
            "description": "<stats>+55 de daño de ataque<br>+35 de resistencia mágica</stats><br><br><unique>Pasiva ÚNICA:</unique> +15 de <a href='Lethality'>letalidad</a><br><unique>Pasiva ÚNICA:</unique> +20 de velocidad de movimiento fuera de combate<br><unique>Activa ÚNICA - Velo de la noche:</unique> Se carga de energía durante 1,5 s para otorgar un escudo de hechizos que bloquea la siguiente habilidad enemiga. Dura 5 s (45 s de enfriamiento). <br><br><rules>(Puedes moverte durante la canalización, pero se cancelará al recibir daño).</rules>",
            "gold": {
                "total": 3100,
                "sell": 2170,
                "base": 675,
                "purchasable": true
            },
            "tags": [
                "SpellBlock",
                "Damage",
                "NonbootsMovement",
                "ArmorPenetration"
            ],
            "plaintext": "Bloquea los efectos de una habilidad enemiga sobre ti.",
            "image": {
                "full": "3814.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 384
            },
            "sanitizedDescription": "+55 de daño de ataque +35 de resistencia mágica Pasiva ÚNICA: +15 de letalidad Pasiva ÚNICA: +20 de velocidad de movimiento fuera de combate Activa ÚNICA - Velo de la noche: Se carga de energía durante 1,5 s para otorgar un escudo de hechizos que bloquea la siguiente habilidad enemiga. Dura 5 s (45 s de enfriamiento). (Puedes moverte durante la canalización, pero se cancelará al recibir daño).",
            "effect": {
                "Effect1Amount": "15",
                "Effect2Amount": "5",
                "Effect3Amount": "20",
                "Effect4Amount": "45",
                "Effect5Amount": "5"
            },
            "stacks": 0,
            "colloq": "letalidad",
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "depth": 3,
            "stats": {
                "FlatSpellBlockMod": 35,
                "FlatPhysicalDamageMod": 55
            },
            "id": 3814,
            "name": "Filo de la noche"
        },
        "3901": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requiere 500 Serpientes de Plata.<br><br><unique>Pasiva ÚNICA:</unique> Andanada de cañón aumenta su cadencia de fuego (6 andanadas adicionales por uso de la habilidad).",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Andanada de cañón gana oleadas adicionales.",
            "image": {
                "full": "3901.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 192,
                "x": 432
            },
            "sanitizedDescription": "Requiere 500 Serpientes de Plata. Pasiva ÚNICA: Andanada de cañón aumenta su cadencia de fuego (6 andanadas adicionales por uso de la habilidad).",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3901,
            "name": "Fuego a discreción"
        },
        "3902": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requiere 500 Serpientes de Plata.<br><br><unique>Pasiva ÚNICA:</unique> Andanada de cañón dispara además una megabala de cañón en el centro del bombardeo que inflige un 300% de daño verdadero y ralentiza un 60% a los objetivos durante 1,5 s. ",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Andanada de cañón dispara una megabala de cañón.",
            "image": {
                "full": "3902.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 0
            },
            "sanitizedDescription": "Requiere 500 Serpientes de Plata. Pasiva ÚNICA: Andanada de cañón dispara además una megabala de cañón en el centro del bombardeo que inflige un 300% de daño verdadero y ralentiza un 60% a los objetivos durante 1,5 s.",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3902,
            "name": "Hija de la muerte"
        },
        "3903": {
            "consumeOnFull": true,
            "stats": {},
            "description": "Requiere 500 Serpientes de Plata.<br><br><unique>Pasiva ÚNICA:</unique> Las unidades aliadas en la Andanada de cañón ganan un 30% de velocidad de movimiento durante 2 s.",
            "gold": {
                "total": 0,
                "sell": 0,
                "base": 0,
                "purchasable": true
            },
            "maps": {
                "8": true,
                "10": true,
                "11": true,
                "12": true,
                "14": false,
                "16": false
            },
            "plaintext": "Andanada de cañón acelera a los aliados.",
            "image": {
                "full": "3903.png",
                "group": "item",
                "sprite": "item2.png",
                "h": 48,
                "w": 48,
                "y": 240,
                "x": 48
            },
            "sanitizedDescription": "Requiere 500 Serpientes de Plata. Pasiva ÚNICA: Las unidades aliadas en la Andanada de cañón ganan un 30% de velocidad de movimiento durante 2 s.",
            "consumed": true,
            "requiredChampion": "Gangplank",
            "id": 3903,
            "name": "Subir moral"
        }
    },
    "groups": [
        {
            "MaxGroupOwnable": "-1",
            "key": "Boots"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "BootsOfSpeed"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Consumable"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Default"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "DoransItems"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Elixir"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade01"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade02"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GangplankRUpgrade03"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GoldItems"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "GuardianItems"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "JungleItems"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "NonItem"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "Potion"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeEmergencyShieldGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeFlashZoneGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeLaserAffixGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeMissileBarrageGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegePortableBarracksGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeRefundGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeShieldGeneratorGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeSniperCannonGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeTeleportPadGroup"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "SiegeTimefieldGroup"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "TheBlackSpear"
        },
        {
            "MaxGroupOwnable": "-1",
            "key": "Trinket"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "ViktorHexCore"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "WardGreen"
        },
        {
            "MaxGroupOwnable": "1",
            "key": "WardPink"
        }
    ],
    "type": "item"
}