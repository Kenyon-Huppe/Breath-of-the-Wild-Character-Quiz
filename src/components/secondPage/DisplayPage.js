import Calculations from "./Calculations"

// displays page with given calculations
const DisplayPage = ({ data }) => {
    return (
        <div>
            <Calculations data={data} />
        </div>

    )
}

/*
    todo calculates character
    todo returns string name of character
    todo shows data in given components for given character
*/

export default DisplayPage

/*


    each question worth 10pts
    6 questions
    pt value of answers: 0, 4, 7, 10
    10 pt zones for each character up to 60 pts


    QUESTIONS:
        - Many would describe my work ethic as being...
        - I feel most relaxed when...
        - If I could be any animal I would be...
        - I express my affection by...
        - Many would describe me as...
        - If I was attacking an enemy I would...

    CHARACTERS:
        Zelda:
            Desc: You a hardworking & studious individual. You hold a great curiosity for the world & discovering how various things work. You are deeply empathetic & care immensly for the people close to you. However, despite your hard working & curious nature, you have a tendency of taking the entire world upon your shoulders & feeling as if no one can understand you. You don't have to do it all alone.

        Link:
            Desc: You are a stoic individual with a fierce focus & determination. While you may come accross as cold & naturally skilled on the outside, this is often not the case. You are a very complex individual who is actually quite humble. You're hesitant to open up to people you don't know & rather hide your true feelings behind your stone-faced facade. Overall you strive for mastery in whatever venture you pursue. It's okay to not always be 'strong'.

        Revali: 0-5
            Desc: You are often misunderstood. Being 'good enough' is not even driving distance of your standards. You strive for excelence through hard work & determination; never to show your progress until it is ready to be shown. You detest nothing more than someone who is simply 'gifted'. In your perfect world, those in power would be deserving of it, having worked for it rather than it being handed down. Often this can come across as arogance. Many see your flaunting of skills & dispicable nature towards those whom seemingly had positions of power handed to them as rude & uncalled for. Remember, no matter how skilled you are, it's okay to ask for help.

        Duruk: 19-24
            Desc: You are the glue of the group. Wanting nothing more than for everyone to get along & be a part of the same team, you are quite a popular individual. Your big personality & natual charm always make you life the party whenever you enter a room. Due to your generous persona, you strive to always look out for the little guy & be a shield for those you care about in your life. while this outward openness can lead to many friendships, it unfortunatly also leads to many shallow friendships.

        Mipha: 13-18
            Desc: You are a deeply romantic individual, often day dreaming of a knight in shining armor to sweep you off your feet. You interact with others with a kind sincerity that is rarely found & truly seek the best for those in need. Your loving & authentic nature is what people are most drawn too. However, there are those that would take advantage of your kindness. Not wanting to "rock the boat" you often fail to speak up when an injustice is commited instead pursuing a more pacificst approach. While it's never a bad idea to help those around you, remember to look after yourself too.

        Urbosa: 6-12
            Desc: You are a strong & wise individual. In a group you act as the adult, balancing others out & settling disputes. Many look to you as a leader & someone with reliablity. When injustices are commited, you are the first to speak up & make it known that you will not stand for it. While you are steadfast in your conviction, this does not mean that you are cold. Rather, you are quite the charasmatic individual, making for a natual born leader. With that said, while your pursuits are admirable, make sure not to overextend yourself. There is only one of you & a world of problems, at the end of the day.
*/
