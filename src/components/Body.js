import React from 'react'
import darksoulsbackground from './images/darksoulsbackground.jpg'
import bloodbornebackground from './images/bloodbornebackground.jpg'
import eldenringbackground from './images/eldenringbackground.jpg'
import darksoulstitle from './images/DStitle.png'
import bloodbornetitle from './images/BBtitle.png'
import eldenringtitle from './images/ERtitle.png'
import DSGIF from './images/DarkSouls.gif'
import BBGIF from './images/Bloodborne.gif'
import ERGIF from './images/EldenRing.gif'
import Media from './Media.js'

const Body = ({reelPosition,widgetSelection}) => {

if(reelPosition===0 && widgetSelection ===0) {
 
// ------------- DARK SOULS --------------
    return (
  
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{left:'17%'}}> 
                    <img src={darksoulstitle} alt="ds title" style={{width:'100%', marginTop:0}}/> 
                    <p className="GameDescription" style={{marginTop:'-3%'}}>
                    Dark Souls is the action role-playing game from the developers who brought you Demon’s Souls, FromSoftware. Dark Souls will have many familiar features:
                    A dark fantasy universe, tense dungeon crawling, fearsome enemy encounters and unique online interactions. Dark Souls is a spiritual successor to Demon’s, 
                    not a sequel. Prepare for a new, despair-inducing world, with a vast, fully-explorable horizon and vertically-oriented landforms. Prepare for a new, 
                    mysterious story, centered around the the world of Lodran, but most of all, prepare to die. You will face countless murderous traps, countless darkly grotesque 
                    mobs and several gargantuan, supremely powerful demons and dragons bosses. You must learn from death to persist through this unforgiving world. And you aren’t 
                    alone. Dark Souls allows the spirits of other players to show up in your world, so you can learn from their deaths and they can learn from yours. 
                    You can also summon players into your world to co-op adventure, or invade other's worlds to PVP battle. New to Dark Souls are Bonfires, which serve as check 
                    points as you fight your way through this epic adventure. While rested at Bonfires, your health and magic replenish but at a cost, all mobs respawn. Beware: 
                    There is no place in Dark Souls that is truly safe. With days of game play and an even more punishing difficulty level, Dark Souls will be the most deeply 
                    challenging game you play this year. Can you live through a million deaths and earn your legacy?
                    </p> 
                    {/* <p className="GameDescriptionBG" style={{marginTop:'-3%'}}>
                    Dark Souls is the action role-playing game from the developers who brought you Demon’s Souls, FromSoftware. Dark Souls will have many familiar features:
                    A dark fantasy universe, tense dungeon crawling, fearsome enemy encounters and unique online interactions. Dark Souls is a spiritual successor to Demon’s, 
                    not a sequel. Prepare for a new, despair-inducing world, with a vast, fully-explorable horizon and vertically-oriented landforms. Prepare for a new, 
                    mysterious story, centered around the the world of Lodran, but most of all, prepare to die. You will face countless murderous traps, countless darkly grotesque 
                    mobs and several gargantuan, supremely powerful demons and dragons bosses. You must learn from death to persist through this unforgiving world. And you aren’t 
                    alone. Dark Souls allows the spirits of other players to show up in your world, so you can learn from their deaths and they can learn from yours. 
                    You can also summon players into your world to co-op adventure, or invade other's worlds to PVP battle. New to Dark Souls are Bonfires, which serve as check 
                    points as you fight your way through this epic adventure. While rested at Bonfires, your health and magic replenish but at a cost, all mobs respawn. Beware: 
                    There is no place in Dark Souls that is truly safe. With days of game play and an even more punishing difficulty level, Dark Souls will be the most deeply 
                    challenging game you play this year. Can you live through a million deaths and earn your legacy?
                    </p>  */}
                </h1>
                <img className="BackgroundImage" src={darksoulsbackground} alt="Dark Souls"/> 
                
            </div>         
     
        )
    } 
    //LORE
    else if (reelPosition===0 && widgetSelection ===1) {
        return (
            <div className="BackgroundImageContainer">

                <h1 className="TitleHeader" style={{left:'17%'}}> 
                    <img src={darksoulstitle} alt="ds title" style={{width:'100%', marginTop:0}}/> 
                    <p className="GameDescription" style={{marginTop:'-3%'}}>
                    A world that is stuck in a cycle of light and dark. Across the three games, you are placed in three distinct lands 
                    and time periods. Lodran, Drangleic and Lothric. You are a nameless undead who has been tasked with the goal of "linking the first flame" which perpetuates the 
                    already over-extended age of fire. Those who seek to fufill their duty are all but guranteed to face many grueling trials and tribulations and are doomed to suffer 
                    countless tasks ere they complete their quest.
                    <div>
                    </div>
                    </p> 
                </h1>
                <img className="BackgroundImage" src={darksoulsbackground} alt="Dark Souls"/> 
                
            </div> 
        )
    } 
    //GAMEPLAY
    else if (reelPosition===0 && widgetSelection ===2) {
        return (
            <div className="BackgroundImageContainer">

                <h1 className="TitleHeader" style={{left:'17%'}}> 
                    <img src={darksoulstitle} alt="ds title" style={{width:'100%', marginTop:0}}/> 
                    <p className="GameDescriptionAlt" style={{marginTop:'-3%'}}>
                        The player character's interaction with the world of Dark Souls includes a great deal of combat. Combat includes melee attacks, 
                        various forms of defensive maneuvering, and magical abilities. For melee attacks, player characters have access to a wide array of high fantasy, medieval-style 
                        weaponry. For defense, playercharacters have access to shields, dodging, and parrying. For magic, which includes a wide variety of offensive and defensive abilities. Player characters do not use any form of mana as in most other fantasy RPGs - instead, they gain a discrete number of uses for each attuned 
                        spell when resting at a bonfire.
                    <br/>
                    <br/>
                        <img src={DSGIF} className='GameplayGif' alt="Dark Souls Gif"/>
                    </p> 

                    
                </h1>
                <img className="BackgroundImage" src={darksoulsbackground} alt="Dark Souls"/> 
                
            </div> 
        )
    } 
    //MEDIA
    else if (reelPosition===0 && widgetSelection ===3) {
        return (
            <div className="BackgroundImageContainer">

                <h1 className="TitleHeader" style={{left:'17%'}}> 
                    <img src={darksoulstitle} alt="ds title" style={{width:'100%', marginTop:0}}/> 
                    <p className="GameDescriptionAlt" style={{marginTop:'-3%', marginLeft:'5%'}}>
                    <Media reelPosition={reelPosition}/>
                    </p> 
                </h1>
                <img className="BackgroundImage" src={darksoulsbackground} alt="Dark Souls"/> 
                
            </div> 
        )
    } 

// ------------- BloodBorne --------------

    else if (reelPosition===-34 && widgetSelection === 0) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'3%', left:'18%'}}>
                    <img src={bloodbornetitle} className="BBTitle" alt="bb title"/>
                    <p className="GameDescription" style={{marginLeft:'0%'}}>
                    Bloodborne is a 2015 Action RPG from renowned Japanese developer FromSoftware exclusively for the PlayStation 4 system. 
                    Face your fears as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading 
                    through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world, and you 
                    must discover its darkest secrets in order to survive.
                    </p>             
                </h1>
                <img className="BackgroundImage" src={bloodbornebackground} alt="Bloodborn"/>
            </div>
    )
    }
    //Lore
    else if (reelPosition===-34 && widgetSelection ===1) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'3%', left:'18%'}}>
                    <img src={bloodbornetitle} className="BBTitle" alt="bb title"/>
                    <p className="GameDescription">
                    Sticken with a mysterious terminal illness, a silent foreigner journeys to the city-state of Yarhnam, home of blood ministration. The city is famed for the medical
                    feats performed within through the use of a mysterious substance known as paleblood. They arrive on the night of the hunt, a massing culling of the horrors 
                    that plague the city. Yarhnam's defenders, the hunters, are few and the beast are many. This metropolis has become overwhelmed and mirrors a nightmare. The only way
                    one may survive the terrors encountered on the night of the hunt is to join the hunt itself...
                    </p>             
                </h1>
                <img className="BackgroundImage" src={bloodbornebackground} alt="Bloodborn"/>
            </div>
        )
    } 
    //Gameplay
    else if (reelPosition===-34 && widgetSelection ===2) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'3%', left:'18%'}}>
                    <img src={bloodbornetitle} className="BBTitle" alt="bb title"/>
                    <p className="GameDescriptionAlt">
                    While players can equip firearms, melee combat is the focus of the game. Transforming blade weapons can take on multiple forms, usually a fast-but-light 
                    version and a slower, longer one. Use the one that suits your playstyle and the enemies at hand, but be aware that you can transform mid-combo, and the 
                    transformation is itself an attack. If you take a hit in combat you have a chance to earn your health back thanks to the Regain system. Upon being damaged 
                    by an enemy, a section of your health bar will turn orange. You have a short window in which to inflict melee damage on enemies; if successful, the section 
                    of your health bar will be refilled.
                    <br/>
                    <br/>
                    <img src={BBGIF} className="GameplayGif" alt="BloodBorne Gif"/>
                    </p>             
                </h1>
                <img className="BackgroundImage" src={bloodbornebackground} alt="Bloodborn"/>
            </div>
        )
    } 
    //Media
    else if (reelPosition===-34 && widgetSelection ===3) {
        return (
        <div className="BackgroundImageContainer">
            <h1 className="TitleHeader" style={{top:'3%', left:'18%'}}>
                <img src={bloodbornetitle} className="BBTitle" alt="bb title"/>
                <p className="GameDescriptionAlt" style={{marginLeft:'5.5%'}}>
                {/* <ImageSlider slides={SliderDataBB} /> */}
                <Media reelPosition={reelPosition}/>
                </p>             
            </h1>
            <img className="BackgroundImage" src={bloodbornebackground} alt="Bloodborn"/>
        </div>
    )
} 

// ------------- Elden Ring --------------

    else if (reelPosition===-68 && widgetSelection ===0) {
    return (
        <div className="BackgroundImageContainer">
            <h1 className="TitleHeader" style={{top:'-5%', left:'17.25%'}}>
                <img src={eldenringtitle} className="ERTitle" alt="ER title"/>
                <p className="GameDescription" style={{marginTop:'-1%'}}>
                The Golden Order has been broken. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring 
                and become an Elden Lord in the Lands Between. In the Lands Between ruled by Queen Marika the Eternal, the Elden 
                Ring, the source of the Erdtree, has been shattered. Marika's offspring, demigods all, claimed the shards of the 
                Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. 
                A war that meant abandonment by the Greater Will. And now the guidance of grace will be brought to the Tarnished 
                who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, 
                follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.
                </p>    
            </h1>
            <img className="BackgroundImage" src={eldenringbackground} alt="Elden Ring"/>
        </div>
    )
    } 
    //LORE
    else if (reelPosition===-68 && widgetSelection ===1) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'-5%', left:'17.25%'}}>
                    <img src={eldenringtitle} className="ERTitle" alt="ER title"/>
                    <p className="GameDescription" style={{marginTop:'-1%'}}>
                    The guidance of lost graces – should you find them - will put you on a road to re-take these lands from the Demigods through might and magic, 
                    but you need not follow their path. Ultimately, your journey will be defined by the strength of your own ambition. The greater your goals, the 
                    greater the challenge will be. Should you choose to claim the Lands Between as your birthright then yes, you must fight. And yes, you may die. 
                    But you will return to fight again. For that is how a champion – or a Lord – is born.
                    </p>    
                </h1>
                <img className="BackgroundImage" src={eldenringbackground} alt="Elden Ring"/>
            </div>
        )
    } 
    //GAMEPLAY
    else if (reelPosition===-68 && widgetSelection ===2) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'-5%', left:'17.25%'}}>
                    <img src={eldenringtitle} className="ERTitle" alt="ER title"/>
                    <p className="GameDescriptionAlt" style={{marginTop:'-1%'}}>
                    Elden Ring will have the typical FromSoftware style of gameplay with new suprises mixed. While having access to the typical 
                    array of swords, shields, and spells, the play can also mount a steed and conduct combat on horseback. Weapon skills are no 
                    longer strictly attached to weapons themselves but now can be freely swapped amongst your weapons. 
                    <br/>
                    <br/>
                    The world of Elden Ring is an open one which allows for free traversal between the various enemy strong holds. It has a 
                    day/night cycle, dynamic weather, and even random encounters.
                    <br/>
                    <br/>
                    <img src={ERGIF} className="GameplayGif" alt="Elden Ring Gif"/>
                    </p>    
                </h1>
                <img className="BackgroundImage" src={eldenringbackground} alt="Elden Ring"/>
            </div>
            )
    } 
    //MEDIA
    else if (reelPosition===-68 && widgetSelection ===3) {
        return (
            <div className="BackgroundImageContainer">
                <h1 className="TitleHeader" style={{top:'-5%', left:'17.25%'}}>
                    <img src={eldenringtitle} className="ERTitle" alt="ER title"/>
                    <p className="GameDescriptionAlt" style={{marginTop:'-1%', marginLeft:'5%'}}>
                    <Media reelPosition={reelPosition}/>
                    </p>    
                </h1>
                <img className="BackgroundImage" src={eldenringbackground} alt="Elden Ring"/>
            </div>
    )
} 

// ------------- Broken --------------

else {

    return (
        <div>
           SOMETHING INVOLVING THE BACKGROUND IS BROKEN 
        </div>
    )
    }
}

export default Body
