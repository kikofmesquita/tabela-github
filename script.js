const teams = {
    // Grupo A
    'alahly': {
        name: 'Al Ahly',
        country: 'Egito',
        group: 'A',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2023/12/13/al-ahly-svg-65689.svg',
        confederation: 'CAF',
        qualifiedAs: 'CAF Champions League',
        fifaRanking: 12,
        coach: 'Marcel Koller',
        matches: [
            {
                opponent: 'Inter Miami',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/07/25/inter-miami-svg-62393.svg',
                date: '14 de junho',
                time: '21:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Palmeiras',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg',
                date: '19 de junho',
                time: '13:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Porto',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg',
                date: '23 de junho',
                time: '22:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            }
        ]
    },
    'intermiami': {
        name: 'Inter Miami',
        country: 'EUA',
        group: 'A',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2023/07/25/inter-miami-svg-62393.svg',
        confederation: 'CONCACAF',
        qualifiedAs: 'País Sede',
        fifaRanking: 25,
        coach: 'Gerardo Martino',
        matches: [
            {
                opponent: 'Al Ahly',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/13/al-ahly-svg-65689.svg',
                date: '14 de junho',
                time: '21:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Porto',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg',
                date: '19 de junho',
                time: '16:00',
                venue: 'Estádio Mercedes-Benz, Atlanta',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Palmeiras',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg',
                date: '23 de junho',
                time: '21:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo A'
            }
        ]
    },
    'palmeiras': {
        name: 'Palmeiras',
        country: 'Brasil',
        group: 'A',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/palmeiras.svg',
        confederation: 'CONMEBOL',
        qualifiedAs: 'Copa Libertadores',
        fifaRanking: 4,
        coach: 'Abel Ferreira',
        matches: [
            {
                opponent: 'Porto',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg',
                date: '15 de junho',
                time: '19:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Al Ahly',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/13/al-ahly-svg-65689.svg',
                date: '19 de junho',
                time: '13:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Inter Miami',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/07/25/inter-miami-svg-62393.svg',
                date: '23 de junho',
                time: '21:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo A'
            }
        ]
    },
    'porto': {
        name: 'Porto',
        country: 'Portugal',
        group: 'A',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/porto.svg',
        confederation: 'UEFA',
        qualifiedAs: 'Classificação UEFA',
        fifaRanking: 15,
        coach: 'Sérgio Conceição',
        matches: [
            {
                opponent: 'Palmeiras',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg',
                date: '15 de junho',
                time: '19:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Inter Miami',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/07/25/inter-miami-svg-62393.svg',
                date: '19 de junho',
                time: '16:00',
                venue: 'Estádio Mercedes-Benz, Atlanta',
                stage: 'Fase de Grupos - Grupo A'
            },
            {
                opponent: 'Al Ahly',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/13/al-ahly-svg-65689.svg',
                date: '23 de junho',
                time: '22:00',
                venue: 'Estádio MetLife, Nova Jersey',
                stage: 'Fase de Grupos - Grupo A'
            }
        ]
    },

    // Grupo B
    'psg': {
        name: 'Paris Saint-Germain',
        country: 'França',
        group: 'B',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
        confederation: 'UEFA',
        qualifiedAs: 'Classificação UEFA',
        fifaRanking: 6,
        coach: 'Luis Enrique',
        matches: [
            {
                opponent: 'Atlético de Madrid',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2025/03/12/Atl%C3%A9tico_de_Madrid.svg',
                date: '15 de junho',
                time: '16:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Botafogo',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
                date: '19 de junho',
                time: '22:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Seattle Sounders',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg',
                date: '23 de junho',
                time: '16:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            }
        ]
    },
    'atleticomadrid': {
        name: 'Atlético de Madrid',
        country: 'Espanha',
        group: 'B',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2025/03/12/Atl%C3%A9tico_de_Madrid.svg',
        confederation: 'UEFA',
        qualifiedAs: 'Classificação UEFA',
        fifaRanking: 8,
        coach: 'Diego Simeone',
        matches: [
            {
                opponent: 'Paris Saint-Germain',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
                date: '15 de junho',
                time: '16:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Seattle Sounders',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg',
                date: '19 de junho',
                time: '19:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Botafogo',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
                date: '23 de junho',
                time: '16:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            }
        ]
    },
    'botafogo': {
        name: 'Botafogo',
        country: 'Brasil',
        group: 'B',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
        confederation: 'CONMEBOL',
        qualifiedAs: 'Copa Libertadores',
        fifaRanking: 20,
        coach: 'Artur Jorge',
        matches: [
            {
                opponent: 'Seattle Sounders',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg',
                date: '15 de junho',
                time: '23:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Paris Saint-Germain',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
                date: '19 de junho',
                time: '22:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Atlético de Madrid',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2025/03/12/Atl%C3%A9tico_de_Madrid.svg',
                date: '23 de junho',
                time: '16:00',
                venue: 'Estádio Rose Bowl, Los Angeles',
                stage: 'Fase de Grupos - Grupo B'
            }
        ]
    },
    'sounders': {
        name: 'Seattle Sounders',
        country: 'EUA',
        group: 'B',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg',
        confederation: 'CONCACAF',
        qualifiedAs: 'Concacaf Champions Cup',
        fifaRanking: 35,
        coach: 'Brian Schmetzer',
        matches: [
            {
                opponent: 'Botafogo',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
                date: '15 de junho',
                time: '23:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Atlético de Madrid',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2025/03/12/Atl%C3%A9tico_de_Madrid.svg',
                date: '19 de junho',
                time: '19:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            },
            {
                opponent: 'Paris Saint-Germain',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
                date: '23 de junho',
                time: '16:00',
                venue: 'Estádio Lumen Field, Seattle',
                stage: 'Fase de Grupos - Grupo B'
            }
        ]
    },

    // Grupo C
    'bayern': {
        name: 'Bayern Munich',
        country: 'Alemanha',
        group: 'C',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
        confederation: 'UEFA',
        qualifiedAs: 'Classificação UEFA',
        fifaRanking: 3,
        coach: 'Thomas Tuchel',
        matches: [
            {
                opponent: 'Auckland City',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/12/Auckland_City.svg',
                date: '15 de junho',
                time: '13:00',
                venue: 'TQL Stadium, Cincinnati',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Boca Juniors',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/19/boca-juniors-svg-13083.svg',
                date: '20 de junho',
                time: '22:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Benfica',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg',
                date: '24 de junho',
                time: '16:00',
                venue: 'Bank of America Stadium, Charlotte',
                stage: 'Fase de Grupos - Grupo C'
            }
        ]
    },
    'auckland': {
        name: 'Auckland City',
        country: 'Nova Zelândia',
        group: 'C',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2023/12/12/Auckland_City.svg',
        confederation: 'OFC',
        qualifiedAs: 'OFC Champions League',
        fifaRanking: 100,
        coach: 'Albert Riera',
        matches: [
            {
                opponent: 'Bayern de Munique',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
                date: '15 de junho',
                time: '13:00',
                venue: 'TQL Stadium, Cincinnati',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Benfica',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg',
                date: '20 de junho',
                time: '13:00',
                venue: 'Inter&Co Stadium, Orlando',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Boca Juniors',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/19/boca-juniors-svg-13083.svg',
                date: '24 de junho',
                time: '16:00',
                venue: 'GEODIS Park, Nashville',
                stage: 'Fase de Grupos - Grupo C'
            }
        ]
    },
    'benfica': {
        name: 'Benfica',
        country: 'Portugal',
        group: 'C',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/benfica.svg',
        confederation: 'UEFA',
        qualifiedAs: 'Classificação UEFA',
        fifaRanking: 9,
        coach: 'Roger Schmidt',
        matches: [
            {
                opponent: 'Boca Juniors',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2019/02/19/boca-juniors-svg-13083.svg',
                date: '16 de junho',
                time: '19:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Auckland City',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/12/Auckland_City.svg',
                date: '20 de junho',
                time: '13:00',
                venue: 'Inter&Co Stadium, Orlando',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Bayern de Munique',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
                date: '24 de junho',
                time: '16:00',
                venue: 'Bank of America Stadium, Charlotte',
                stage: 'Fase de Grupos - Grupo C'
            }
        ]
    },
    'bocajuniors': {
        name: 'Boca Juniors',
        country: 'Argentina',
        group: 'C',
        logoUrl: 'https://s.sde.globo.com/media/organizations/2019/02/19/boca-juniors-svg-13083.svg',
        confederation: 'CONMEBOL',
        qualifiedAs: 'Copa Libertadores',
        fifaRanking: 18,
        coach: 'Diego Martínez',
        matches: [
            {
                opponent: 'Benfica',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg',
                date: '16 de junho',
                time: '19:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Bayern de Munique',
                opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
                date: '20 de junho',
                time: '22:00',
                venue: 'Estádio Hard Rock, Miami',
                stage: 'Fase de Grupos - Grupo C'
            },
            {
                opponent: 'Auckland City',
                opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/12/Auckland_City.svg',
                date: '24 de junho',
                time: '16:00',
                venue: 'GEODIS Park, Nashville',
                stage: 'Fase de Grupos - Grupo C'
            }
        ]
    },


    // ...existing code...
// Grupo D
'chelsea': {
    name: 'Chelsea',
    country: 'Inglaterra',
    group: 'D',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 14,
    coach: 'Mauricio Pochettino',
    matches: [
        {
            opponent: 'Los Angeles FC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/08/15/los-angeles-fc-svg-63033.svg',
            date: '16 de junho',
            time: '16:00',
            venue: 'Estádio Mercedes-Benz, Atlanta',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Flamengo',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
            date: '20 de junho',
            time: '15:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Espérance de Tunis',
            opponentLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8377.png&h=200&w=200',
            date: '24 de junho',
            time: '21:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        }
    ]
},
'flamengo': {
    name: 'Flamengo',
    country: 'Brasil',
    group: 'D',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
    confederation: 'CONMEBOL',
    qualifiedAs: 'Copa Libertadores',
    fifaRanking: 10,
    coach: 'Tite',
    matches: [
        {
            opponent: 'Espérance de Tunis',
            opponentLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8377.png&h=200&w=200',
            date: '16 de junho',
            time: '22:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Chelsea',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
            date: '20 de junho',
            time: '15:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Los Angeles FC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/08/15/los-angeles-fc-svg-63033.svg',
            date: '24 de junho',
            time: '22:00',
            venue: 'Estádio Camping World, Orlando',
            stage: 'Fase de Grupos - Grupo D'
        }
    ]
},
'esperance': {
    name: 'Espérance',
    country: 'Tunísia',
    group: 'D',
    logoUrl: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8377.png&h=200&w=200',
    confederation: 'CAF',
    qualifiedAs: 'CAF Champions League',
    fifaRanking: 45,
    coach: 'Miguel Cardoso',
    matches: [
        {
            opponent: 'Flamengo',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
            date: '16 de junho',
            time: '22:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Los Angeles FC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/08/15/los-angeles-fc-svg-63033.svg',
            date: '20 de junho',
            time: '19:00',
            venue: 'GEODIS Park, Nashville',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Chelsea',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
            date: '24 de junho',
            time: '21:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo D'
        }
    ]
},
'Angeles': {
    name: 'Los Angeles FC',
    country: 'EUA',
    group: 'D',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2023/08/15/los-angeles-fc-svg-63033.svg',
    confederation: 'CONCACAF',
    qualifiedAs: 'Repescagem',
    fifaRanking: 'N/A',
    coach: 'A definir',
    matches: [
        {
            opponent: 'Chelsea',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
            date: '16 de junho',
            time: '16:00',
            venue: 'Estádio Mercedes-Benz, Atlanta',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Espérance de Tunis',
            opponentLogo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/8377.png&h=200&w=200',
            date: '20 de junho',
            time: '19:00',
            venue: 'GEODIS Park, Nashville',
            stage: 'Fase de Grupos - Grupo D'
        },
        {
            opponent: 'Flamengo',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
            date: '24 de junho',
            time: '22:00',
            venue: 'Estádio Camping World, Orlando',
            stage: 'Fase de Grupos - Grupo D'
        }
    ]
},

// Grupo E
'river': {
    name: 'River Plate',
    country: 'Argentina',
    group: 'E',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2024/10/14/River_Escudo_novo.svg',
    confederation: 'CONMEBOL',
    qualifiedAs: 'Copa Libertadores',
    fifaRanking: 11,
    coach: 'Martín Demichelis',
    matches: [
        {
            opponent: 'Urawa Red Diamonds',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/19/urawa-svg-65917.svg',
            date: '17 de junho',
            time: '16:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Monterrey',
            opponentLogo: 'https://s.sde.globo.com/media/original/2011/12/07/Monterrey_65.png',
            date: '21 de junho',
            time: '19:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Internazionale',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
            date: '25 de junho',
            time: '22:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        }
    ]
},
'urawa': {
    name: 'Urawa Red Diamonds',
    country: 'Japão',
    group: 'E',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2023/12/19/urawa-svg-65917.svg',
    confederation: 'AFC',
    qualifiedAs: 'AFC Champions League',
    fifaRanking: 50,
    coach: 'Per-Mathias Høgmo',
    matches: [
        {
            opponent: 'River Plate',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/14/River_Escudo_novo.svg',
            date: '17 de junho',
            time: '16:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Internazionale',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
            date: '21 de junho',
            time: '22:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Monterrey',
            opponentLogo: 'https://s.sde.globo.com/media/original/2011/12/07/Monterrey_65.png',
            date: '25 de junho',
            time: '22:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        }
    ]
},
'monterrey': {
    name: 'Monterrey',
    country: 'México',
    group: 'E',
    logoUrl: 'https://s.sde.globo.com/media/original/2011/12/07/Monterrey_65.png',
    confederation: 'CONCACAF',
    qualifiedAs: 'Concacaf Champions Cup',
    fifaRanking: 30,
    coach: 'Fernando Ortiz',
    matches: [
        {
            opponent: 'Internazionale',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
            date: '17 de junho',
            time: '22:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'River Plate',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/14/River_Escudo_novo.svg',
            date: '21 de junho',
            time: '19:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Urawa Red Diamonds',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/19/urawa-svg-65917.svg',
            date: '25 de junho',
            time: '22:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        }
    ]
},
'inter': {
    name: 'Inter',
    country: 'Itália',
    group: 'E',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/inter.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 5,
    coach: 'Simone Inzaghi',
    matches: [
        {
            opponent: 'Monterrey',
            opponentLogo: 'https://s.sde.globo.com/media/original/2011/12/07/Monterrey_65.png',
            date: '17 de junho',
            time: '22:00',
            venue: 'Estádio Rose Bowl, Los Angeles',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'Urawa Red Diamonds',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/12/19/urawa-svg-65917.svg',
            date: '21 de junho',
            time: '22:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        },
        {
            opponent: 'River Plate',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/14/River_Escudo_novo.svg',
            date: '25 de junho',
            time: '22:00',
            venue: 'Estádio Lumen Field, Seattle',
            stage: 'Fase de Grupos - Grupo E'
        }
    ]
},

// Grupo F
'fluminense': {
    name: 'Fluminense',
    country: 'Brasil',
    group: 'F',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
    confederation: 'CONMEBOL',
    qualifiedAs: 'Copa Libertadores',
    fifaRanking: 15,
    coach: 'Fernando Diniz',
    matches: [
        {
            opponent: 'Borussia Dortmund',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
            date: '17 de junho',
            time: '13:00',
            venue: 'Estádio MetLife, Nova Jersey',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Ulsan HD',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/05/svg.svg',
            date: '21 de junho',
            time: '19:00',
            venue: 'Estádio MetLife, Nova Jersey',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Mamelodi Sundowns',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2016/11/22/Mamelodi_Sundowns_65.png',
            date: '25 de junho',
            time: '16:00',
            venue: 'Estádio Hard Rock, Miami',
            stage: 'Fase de Grupos - Grupo F'
        }
    ]
},
'dortmund': {
    name: 'Borussia Dortmund',
    country: 'Alemanha',
    group: 'F',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/borussia-dortmund.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 7,
    coach: 'Edin Terzić',
    matches: [
        {
            opponent: 'Fluminense',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
            date: '17 de junho',
            time: '13:00',
            venue: 'Estádio MetLife, Nova Jersey',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Mamelodi Sundowns',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2016/11/22/Mamelodi_Sundowns_65.png',
            date: '21 de junho',
            time: '13:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Ulsan HD',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/05/svg.svg',
            date: '25 de junho',
            time: '16:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo F'
        }
    ]
},
'ulsan': {
    name: 'Ulsan Hyundai',
    country: 'Coreia do Sul',
    group: 'F',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2024/12/05/svg.svg',
    confederation: 'AFC',
    qualifiedAs: 'AFC Champions League',
    fifaRanking: 40,
    coach: 'Hong Myung-bo',
    matches: [
        {
            opponent: 'Mamelodi Sundowns',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2016/11/22/Mamelodi_Sundowns_65.png',
            date: '17 de junho',
            time: '19:00',
            venue: 'Inter&Co Stadium, Orlando',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Fluminense',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
            date: '21 de junho',
            time: '19:00',
            venue: 'Estádio MetLife, Nova Jersey',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Borussia Dortmund',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
            date: '25 de junho',
            time: '16:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo F'
        }
    ]
},
'sundowns': {
    name: 'Mamelodi Sundowns',
    country: 'África do Sul',
    group: 'F',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2016/11/22/Mamelodi_Sundowns_65.png',
    confederation: 'CAF',
    qualifiedAs: 'CAF Champions League',
    fifaRanking: 55,
    coach: 'Rulani Mokwena',
    matches: [
        {
            opponent: 'Ulsan HD',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/05/svg.svg',
            date: '17 de junho',
            time: '19:00',
            venue: 'Inter&Co Stadium, Orlando',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Borussia Dortmund',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
            date: '21 de junho',
            time: '13:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo F'
        },
        {
            opponent: 'Fluminense',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
            date: '25 de junho',
            time: '16:00',
            venue: 'Estádio Hard Rock, Miami',
            stage: 'Fase de Grupos - Grupo F'
        }
    ]
},

// Grupo G
'city': {
    name: 'Manchester City',
    country: 'Inglaterra',
    group: 'G',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/manchester-city.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 1,
    coach: 'Pep Guardiola',
    matches: [
        {
            opponent: 'Wydad AC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2017/11/28/Wydad_Casablanca_logo65px.png',
            date: '18 de junho',
            time: '13:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Al Ain',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/20/Al_Ain_FC_S6ZOvGV.svg',
            date: '22 de junho',
            time: '21:00',
            venue: 'Estádio Mercedes-Benz, Atlanta',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Juventus',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2020/12/21/juventus-italia-svg.svg',
            date: '26 de junho',
            time: '16:00',
            venue: 'Estádio Camping World, Orlando',
            stage: 'Fase de Grupos - Grupo G'
        }
    ]
},
'wydad': {
    name: 'Wydad AC',
    country: 'Marrocos',
    group: 'G',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2017/11/28/Wydad_Casablanca_logo65px.png',
    confederation: 'CAF',
    qualifiedAs: 'CAF Champions League',
    fifaRanking: 65,
    coach: 'Abdellatif Jrindou',
    matches: [
        {
            opponent: 'Manchester City',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
            date: '18 de junho',
            time: '13:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Juventus',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2020/12/21/juventus-italia-svg.svg',
            date: '22 de junho',
            time: '12:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Al Ain',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/20/Al_Ain_FC_S6ZOvGV.svg',
            date: '26 de junho',
            time: '16:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo G'
        }
    ]
},
'alain': {
    name: 'Al Ain',
    country: 'Emirados Árabes',
    group: 'G',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2024/10/20/Al_Ain_FC_S6ZOvGV.svg',
    confederation: 'AFC',
    qualifiedAs: 'AFC Champions League',
    fifaRanking: 70,
    coach: 'Hernán Crespo',
    matches: [
        {
            opponent: 'Juventus',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2020/12/21/juventus-italia-svg.svg',
            date: '18 de junho',
            time: '22:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Manchester City',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
            date: '22 de junho',
            time: '21:00',
            venue: 'Estádio Mercedes-Benz, Atlanta',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Wydad AC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2017/11/28/Wydad_Casablanca_logo65px.png',
            date: '26 de junho',
            time: '16:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo G'
        }
    ]
},
'juventus': {
    name: 'Juventus',
    country: 'Itália',
    group: 'G',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/juventus.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 13,
    coach: 'Massimiliano Allegri',
    matches: [
        {
            opponent: 'Al Ain',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/10/20/Al_Ain_FC_S6ZOvGV.svg',
            date: '18 de junho',
            time: '22:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Wydad AC',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2017/11/28/Wydad_Casablanca_logo65px.png',
            date: '22 de junho',
            time: '12:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo G'
        },
        {
            opponent: 'Manchester City',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
            date: '26 de junho',
            time: '16:00',
            venue: 'Camping World Stadium, Orlando',
            stage: 'Fase de Grupos - Grupo G'
        }
    ]
},

// Grupo H
'realmadrid': {
    name: 'Real Madrid',
    country: 'Espanha',
    group: 'H',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2018/03/11/real-madrid.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 2,
    coach: 'Carlo Ancelotti',
    matches: [
        {
            opponent: 'Al Hilal',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/02/07/al_hilal_defesa.svg',
            date: '18 de junho',
            time: '16:00',
            venue: 'Hard Rock Stadium, Miami',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Pachuca',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/11/pachuca-logo.svg',
            date: '22 de junho',
            time: '16:00',
            venue: 'Bank of America Stadium, Charlotte',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'FC Salzburg',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/7/77/FC_Red_Bull_Salzburg_logo.svg',
            date: '26 de junho',
            time: '22:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo H'
        }
    ]
},
'alhilal': {
    name: 'Al Hilal',
    country: 'Arábia Saudita',
    group: 'H',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2023/02/07/al_hilal_defesa.svg',
    confederation: 'AFC',
    qualifiedAs: 'AFC Champions League',
    fifaRanking: 25,
    coach: 'Jorge Jesus',
    matches: [
        {
            opponent: 'Real Madrid',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
            date: '18 de junho',
            time: '16:00',
            venue: 'Hard Rock Stadium, Miami',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'FC Salzburg',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/7/77/FC_Red_Bull_Salzburg_logo.svg',
            date: '22 de junho',
            time: '19:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Pachuca',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/11/pachuca-logo.svg',
            date: '26 de junho',
            time: '22:00',
            venue: 'GEODIS Park, Nashville',
            stage: 'Fase de Grupos - Grupo H'
        }
    ]
},
'pachuca': {
    name: 'Pachuca',
    country: 'México',
    group: 'H',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2024/12/11/pachuca-logo.svg',
    confederation: 'CONCACAF',
    qualifiedAs: 'Concacaf Champions Cup',
    fifaRanking: 32,
    coach: 'Guillermo Almada',
    matches: [
        {
            opponent: 'FC Salzburg',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/7/77/FC_Red_Bull_Salzburg_logo.svg',
            date: '18 de junho',
            time: '19:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Real Madrid',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
            date: '22 de junho',
            time: '16:00',
            venue: 'Bank of America Stadium, Charlotte',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Al Hilal',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/02/07/al_hilal_defesa.svg',
            date: '26 de junho',
            time: '22:00',
            venue: 'GEODIS Park, Nashville',
            stage: 'Fase de Grupos - Grupo H'
        }
    ]
},
'salzburg': {
    name: 'Red Bull Salzburg',
    country: 'Áustria',
    group: 'H',
    logoUrl: 'https://s.sde.globo.com/media/organizations/2023/09/20/RB_Salzburg_copy.svg',
    confederation: 'UEFA',
    qualifiedAs: 'Classificação UEFA',
    fifaRanking: 22,
    coach: 'Gerhard Struber',
    matches: [
        {
            opponent: 'Pachuca',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2024/12/11/pachuca-logo.svg',
            date: '18 de junho',
            time: '19:00',
            venue: 'TQL Stadium, Cincinnati',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Al Hilal',
            opponentLogo: 'https://s.sde.globo.com/media/organizations/2023/02/07/al_hilal_defesa.svg',
            date: '22 de junho',
            time: '19:00',
            venue: 'Audi Field, Washington, D.C.',
            stage: 'Fase de Grupos - Grupo H'
        },
        {
            opponent: 'Real Madrid',
            opponentLogo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
            date: '26 de junho',
            time: '22:00',
            venue: 'Lincoln Financial Field, Filadélfia',
            stage: 'Fase de Grupos - Grupo H'
        }
    ]
}   
};


let firstLoad = false;
let showAd = true;
// Funções de navegação
function showScreen(screenId) {


    try {

        if (firstLoad && showAd) {

             setTimeout(() => {
                AndroidInterface.onCustomFunctionCalled("");
                showAd = false;
            }, 3000);
            // Exibe o anúncio após 3 segundos
            console.log("Anúncio exibido após 3 segundos.");    
        }

        firstLoad = true;
    } catch (erro) {
        console.info("Erro capturado:", erro.message);
    } finally {

        // Esconde todas as telas
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Mostra a tela selecionada
        document.getElementById(screenId).classList.add('active');

        // Atualiza a navegação inferior
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Botão de navegação correspondente
        if (screenId !== 'team-details-screen') {
            const navItem = document.querySelector(`.nav-item[onclick="showScreen('${screenId}')"]`);
            if (navItem) navItem.classList.add('active');
        }

        // Rola para o topo
        window.scrollTo(0, 0);

        console.log("Este bloco será executado sempre.");
    }
}

// Mostrar detalhes do time
function showTeamDetails(teamId) {
    const team = teams[teamId];
    if (!team) return;

    // Atualiza os detalhes do time
    document.getElementById('detail-team-name').textContent = team.name;
    document.getElementById('detail-team-name-large').textContent = team.name;
    document.getElementById('detail-team-country').textContent = team.country;
    document.getElementById('detail-team-logo').querySelector('img').src = team.logoUrl;
    document.getElementById('detail-team-logo').querySelector('img').alt = team.name;

    // Grupo
    const groupBadge = document.getElementById('detail-team-group');
    groupBadge.textContent = team.group;
    groupBadge.style.backgroundColor = getGroupColor(team.group);

    // Informações do time
    document.getElementById('detail-team-confederation').textContent = team.confederation;
    document.getElementById('detail-team-qualification').textContent = team.qualifiedAs;
    document.getElementById('detail-team-ranking').textContent = team.fifaRanking;
    document.getElementById('detail-team-coach').textContent = team.coach;

    // Jogos do time
    const matchList = document.querySelector('#team-details-screen .match-list');
    matchList.innerHTML = '';

    team.matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.innerHTML = `
            <div class="match-stage">${match.stage}</div>
            <div class="match-teams">
                <div class="match-team">
                    <img src="${team.logoUrl}" alt="${team.name}" class="team-logo-small">
                    <span class="team-name-small">${team.name}</span>
                </div>
                <div class="match-score">vs</div>
                <div class="match-team">
                    <img src="${match.opponentLogo}" alt="${match.opponent}" class="team-logo-small">
                    <span class="team-name-small">${match.opponent}</span>
                </div>
            </div>
            <div class="match-details">
                <div class="match-detail">
                    <span class="material-icons">schedule</span>
                    <span class="match-detail-date">${match.date}</span>
                    <span>${match.time.replace('h', ':')}</span>
                </div>
                <div class="match-detail">
                    <span class="material-icons">location_on</span>
                    <span>${match.venue}</span>
                </div>
            </div>
        `;
        matchList.appendChild(matchCard);
    });

    // Mostra a tela de detalhes
    showScreen('team-details-screen');
}

// Voltar para a tela de times
function backToTeams() {
    showScreen('teams-screen');
}

// Funções auxiliares
function getGroupColor(group) {
    const colors = {
        'A': 'var(--group-a)',
        'B': 'var(--group-b)',
        'C': 'var(--group-c)',
        'D': 'var(--group-d)'
    };
    return colors[group] || 'var(--fifa-blue)';
}

// Função para traduzir os nomes dos estágios e grupos
function traduzirTextosDosJogos() {
    // Traduzir todos os estágios das partidas
    document.querySelectorAll('.match-stage').forEach(element => {
        let texto = element.innerHTML;
        texto = texto.replace('Group Stage - Group', 'Fase de Grupos - Grupo');
        texto = texto.replace('Round of 16', 'Oitavas de Final');
        texto = texto.replace('Quarter Finals', 'Quartas de Final');
        texto = texto.replace('Semi Finals', 'Semifinais');
        texto = texto.replace('Final', 'Final');
        element.innerHTML = texto;
    });

    // Traduzir botão de carregar mais
    const loadMoreButton = document.querySelector('.load-more-button');
    if (loadMoreButton) {
        loadMoreButton.textContent = 'Carregar Mais Partidas';
    }

    // Traduzir abas
    document.querySelectorAll('.stage-tab').forEach(tab => {
        switch (tab.textContent.trim()) {
            case 'Group Stage':
                tab.textContent = 'Fase de Grupos';
                break;
            case 'Round of 16':
                tab.textContent = 'Oitavas de Final';
                break;
            case 'Quarter Finals':
                tab.textContent = 'Quartas de Final';
                break;
            case 'Semi Finals':
                tab.textContent = 'Semifinais';
                break;
            case 'Final':
                tab.textContent = 'Final';
                break;
        }
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    // Iniciar na tela inicial
    showScreen('home-screen');

    // Configurar navegação por abas nas telas de cronograma e resultados
    document.querySelectorAll('.stage-tab').forEach((tab, index) => {
        tab.addEventListener('click', function () {
            // Remove a classe active de todas as abas
            const tabs = this.parentElement.querySelectorAll('.stage-tab');
            tabs.forEach(t => t.classList.remove('active'));

            // Adiciona a classe active na aba clicada
            this.classList.add('active');

            // Aqui você adicionaria a lógica para mostrar os conteúdos correspondentes
            // Por exemplo, filtrar partidas pelo estágio selecionado
        });
    });

    // Configurar botão "Load More" no calendário
    const loadMoreButton = document.querySelector('.load-more-button');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            // Toggle mensagem para demonstrar a funcionalidade
            alert("Mais partidas serão carregadas ao longo do evento");
        });
    }

    // Inicializar sistema de traduções
    if (typeof updatePageContent === 'function') {
        updatePageContent();
    }

    // Traduções de texto fixos que não estão no sistema de i18n
    traduzirTextosDosJogos();
});