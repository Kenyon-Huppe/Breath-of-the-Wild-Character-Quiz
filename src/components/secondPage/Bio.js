import classes from '../css/bio.module.css'

// image & description of charcter / personality
const Bio = ({ characterName }) => {
    /**
     * asign src link to correct image to variable
     * asign text to variable
     */
    let imgLink = '';
    let bioText = '';

    if (characterName === 'revali') {
        imgLink = '/img/revali.PNG'
        bioText = 'You are often misunderstood. Being \'good enough\' is not even driving distance of your standards. You strive for excelence through hard work & determination; never to show your progress until it is ready to be shown. You detest nothing more than someone who is simply \'gifted\'. In your perfect world, those in power would be deserving of it, having worked for it rather than it being handed down. Often this can come across as arogance. Many see your flaunting of skills & dispicable nature towards those whom seemingly had positions of power handed to them as rude & uncalled for. Remember, no matter how skilled you are, it\'s okay to ask for help.'
    } else if (characterName === 'link') {
        imgLink = '/img/link.PNG'
        bioText = 'You are a stoic individual with a fierce focus & determination. While you may come accross as cold & naturally skilled on the outside, this is often not the case. You are a very complex individual who is actually quite humble. You\'re hesitant to open up to people you don\'t know & rather hide your true feelings behind your stone-faced facade. Overall you strive for mastery in whatever venture you pursue. It\'s okay to not always be \'strong\'.'
    } else if (characterName === 'zelda') {
        imgLink = '/img/zelda.PNG'
        bioText = 'You a hardworking & studious individual. You hold a great curiosity for the world & discovering how various things work. You are deeply empathetic & care immensly for the people close to you. However, despite your hard working & curious nature, you have a tendency of taking the entire world upon your shoulders & feeling as if no one can understand you. You don\'t have to do it all alone.'
    } else if (characterName === 'mipha') {
        imgLink = '/img/mipha.PNG'
        bioText = 'You are a deeply romantic individual, often day dreaming of a knight in shining armor to sweep you off your feet. You interact with others with a kind sincerity that is rarely found & truly seek the best for those in need. Your loving & authentic nature is what people are most drawn too. However, there are those that would take advantage of your kindness. Not wanting to "rock the boat" you often fail to speak up when an injustice is commited instead pursuing a more pacificst approach. While it\'s never a bad idea to help those around you, remember to look after yourself too.'
    } else if (characterName === 'urbosa') {
        imgLink = '/img/urbosa.PNG'
        bioText = 'You are a strong & wise individual. In a group you act as the adult, balancing others out & settling disputes. Many look to you as a leader & someone with reliablity. When injustices are commited, you are the first to speak up & make it known that you will not stand for it. While you are steadfast in your conviction, this does not mean that you are cold. Rather, you are quite the charasmatic individual, making for a natual born leader. With that said, while your pursuits are admirable, make sure not to overextend yourself. There is only one of you & a world of problems, at the end of the day.'
    } else {
        imgLink = '/img/duruk.PNG'
        bioText = 'You are the glue of the group. Wanting nothing more than for everyone to get along & be a part of the same team, you are quite a popular individual. Your big personality & natual charm always make you life the party whenever you enter a room. Due to your generous persona, you strive to always look out for the little guy & be a shield for those you care about in your life. while this outward openness can lead to many friendships, it unfortunatly can also lead to you shouldering too big a burden. Remember to also put yourself first.'
    }

    return (
        <div className={classes.bioContainer}>
            <h1 className={classes.characterName}>You got {characterName}!</h1>
            <img src={imgLink} alt="" className={classes.characterImg} style={{ width: '500px' }}></img>
            <p className={classes.characterText}>{bioText}</p>
        </div>
    )
}

export default Bio
