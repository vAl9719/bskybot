export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  const myArray: string[] = ["why's it so hard to read a sentence in my eyes?",
    "i am relieved that i kept my room tidy",
    "i'll be nothing again, so what am i between now and then?",
    "i don't take the sky for granted, it could fall anytime it pleases",
    "promise the next time that you take my hand is to show me the door",
    "but i know i'm not a bad man, i know because i see me in you",
    "doubt comes in and my heart falters and forgets the songs it sung",
    "they say we are asleep until we fall in love, we are children of dust and ashes",
    "last night i dreamed i met myself at a tango",
    "pull it together because we're coming apart, and the preacher says the devil loves a sensitive heart",
    "with every spark we're losing glow",
    "won't you go make the most of a bad existence?",
    "so please, hurry, leave me, i can't breathe, please don't say you love me",
    "it's time to get out of bed and be the starchild i can be",
    "bite my tongue and wait my turn, i've waited for a century",
    "i could be so good at love",
    "and no one grew into anything new, we just became the worst of what we were",
    "i hope we kiss goodnight",
    "you say it's late in the game, i say it's darkest just before the sun replaces the rain",
    "your hand feels so grand in mine",
    "i wish that i could sing like that",
    "but i don't practice enough",
    "i won't speak, i won't say a word, i won't come back to haunt you",
    "so pardon the silence that you're hearing is turnin' into a deafening painful, shameful roar",
    "love me to sleep",
    "i'm not special, i'm the same as you",
    "please don't slow me down if i'm going too fast",
    "she said take care but i take more than i bring",
    "i used to see the way the world could be, but now the way it is is all i see",
    "but when he walks in, i am loved, i am loved",
    "only once you're bored out of your mind will you see the monster's face",
    "i'm confused by the notion that somebody loves me",
    "and i sang to him of nothing at all",
    "the rubix cube isn't solving for us",
    "we shall have epilogue after epilogue",
    "don't let me leave i'll only take more than i gave",
    "but i will live for you my selfless love",
    "two could be complete without the rest of the world",
    "and what have you done since? and what will you do for the rest of your life?",
    "let me walk to the top of the big night sky",
    "someone in this room is trying to feel something",
    "i didn't know, i didn't care, i didn't even understand",
    "can i waste some of your time here on the sidewalk?",
    "who's got the television on at the worst time of the week?",
    "death comes for good sons so bet on the bad",
    "mom, am i still young? can i dream for a few months more?",
    "i've got mine coming, it's just a matter of time",
    "so we talk ourselves to hell to forget the love we never felt",
    "someone in this room is trying to have a beautiful moment, why won't you let them?",
    "i love you, i love you, i love you, i love you, i love you",
    "i need you to love me more, love me more, love me more, love enough to drown it out",
    "the deeper i get, the less that i know",
    "i will try to forgive myself as i am",
    "what if i'm not big enough to take in so much pain?",
    "in a world full of people who all haven't hurt me the way that you hurt me the only person i'd want over for dinner is you",
    "what i know is i still love you, that's my reality",
    "you drove that train right through my heart",
    "i would kill for that thrill of first love",
    "i was okay once, i can be okay okay again, i've not gone crazy just yet",
    "always singing in my sleep, i will leave it in my dreams",
    "life is too short, but i will live for you",
    "and if i tell you that i'm one step closer to god",
    "i look perfect for the background",
    "'cause i don't know if i belong here anymore, i",
    "i'm so sick of going through the motions, i wanna be the new routine",
    "i wanna find another way out",
    "i can't repeat myself by hanging out with people i miss",
    "i can't repeat myself, so steal my heart and shoot me with your gun",
    "maybe i'm frustrated i can't walk through my golden days",
    "karma doesn't like it when i hold an unshaken gaze",
    "oh, way to go there, i'm dramatic, so dramatic",
    "i've given up my daydreams to dream in place of living",
    "someday, keeps me warm when the present gets too cold",
    "fall in love with who you'll one day be, but please, don't fall so hard",
    "you seem so far away, somewhere beyond your next life",
    "i just hope you smile in this one",
    "save me, somebody save me, i'm screaming for a life that i cannot have",
    "the phone is hanging up, but you're still in the same spot",
    "it drives me forward every moment, makes sure i don't stop too long to smell the flowers",
    "i'm at the end of my means from idolizing a made-up man who one day could be me",
    "and when i die, i'll get those cold copper kisses on my eyes",
    "and now i'm fighting for a look at the downside",
    "oh the pennies on your eyes will pay the toll at your demise",
    "may each word i speak be backed by each of my teeth",
    "if you shot me tonight, would it kill me?",
    "can it be our first of many, first of many, first of many?",
    "i'm looking in the mirror and swallowing the key",
    "if time is meant for living why's it killing me?",
    "my hands, your hands, i'll hold forever",
    "i know it's not, it's not your fault",
    "i want new friends, but they don't want me",
    "don't get too comfortable with the man who has no history",
    "friday nights, foggy streets and christmas lights, wake me up on saturday",
    "and i will always be your friend",
    "so grab my hand, take my hand, i can't do this alone",
    "but she'll never leave her bedroom in this bedroom community",
    "it's not a murder, it's an inevitable tragedy",
    "i love the way you make me feel when i'm staring at my screen at 4am trying not to fall asleep",
    "is it the cramps or is my life always this bad?",
    "i don't want your fake obsessions i need something real to change",
    "baby i was born an effigy",
    "oh, why do i beg my legs to take me much farther than they were meant to?",
    "good enough might be good enough for those other kids, don't you stomach it",
    "godspeed, it will all catch up to you",
    "i can't tell what is good for bad for me",
    "can someone tell me how to be all by myself or teach me how to love somebody else",
    "will somebody take this soul?",
    "your pain is eased, but you'll never be free",
    "so please don't take, take my job from me",
    "one by one i missed my mark",
    "god, it's brutal out here",
    "well, i woke up alone staring at my ceiling",
    "i don't want the world but i'll take this city",
    "it hurts to say, but i want you to stay",
    "you've got to play through the pain and ignore what's creeping in",
    "these insatiable aspirations make me whole",
    "my heart broke, and then the world broke, and then my brain broke too",
    "and i don't know how to move forward, how could i leave so much of me behind?",
    "i just don't want it to be over, i just don't want it to end",
    "all i can do is smile",
    "i don't know if this is me at all or just some ghost i've me",
    "are we still friends? can we be friends?",
    "i just need a quiet place where i can scream how i love you",
    "someone to watch me die",
    "but if i'd seen you in the bakery, you probably wouldn't have seen me",
    "i'm the man who shot the moon and cried",
    "fold under a deeper slumber",
    "i cannot help but think i've overstayed my welcome",
    "i know you're feening for uncertainty but i'm not scared",
    "i don't think it was ever built to carry this much weight",
    "is it really a complex or just lacking context?",
    "i can't dance like i used to, i don't have the same moves as you",
    "so eat your friends they'll understand 'cause they would too",
    "i look too far ahead, glitter in my irises from starin' at the moon",
    "or do i get a little thrill in the feeling of being set on fire while it burns and begs for more",
    "no god could abandon you enough times",
    "i understand now the world will not leave me behind",
    "if i trust the ground beneath my feet it just might stay to carry me",
    "a declaration, a promise on my teeth to never leave a word without a ceremony",
    "and if it lands on a bad number, then on well",
    "what a drag to drag you down",
    "you'd have to stop the world just to stop the feeling",
    "and when it's time to go to bed, i'll keep the nightlight on",
    "i am a soldier, i don't believe in anything",
    "make me confused, mock me with praise",
    "somebody crowd me with love, somebody force me to care",
    "and when your heart breaks i'll be beside you",
    "i didn't miss the cold weather i just missed you",
    "it only takes a minute to forget a week",
    "and then she wrapped her hands around my neck and i felt love",
    "gone now are the old times",
    "you can't stand the thought of a real beating heart you'd be holding",
    "but i'll try my luck with you",
    "he's gonna let you down",
    "walk a mile in my shoes, and if you don't come back at least i've got nothing to lose",
    "i think i'm spiraling, i'm spiraling downwards",
    "my body's craving another soul that isn't mine",
    "i think to myself, 'oh what a beautiful place to die'",
    "i'm holding your hand, i think i can see the ocean in your eyes",
    "we'll never go home again, but i'm still the same",
    "i have a way of waiting on my own",
    "right here i'm safe and sound in a place that lasts forever",
    "and i am so happy right now, i know i shouldn't be happy but i am so happy right now",
    "what if my heart gives out? what if my mind gives out?",
    "i can't leave yet",
    "some day, when all my troubles here are over",
    "you're still alive, you have to live, you have to live",
    "love never lasts, love always leaves you in the end",
    "tell me, tell me, pretty stranger, am i really your familiar?",
    "and i want you to ask the waiter if i really am who i say i am",
    "i want you to put your hand on my knee, will that be alright?",
    "i can't quite remember the last time that i wrote a love song quite as terrible as this",
    "what do you do with a loving feeling if the loving feeling makes you all alone?",
    "when you're nursing a heartache, sometimes you look back trying to find the reason your life has gone off track",
    "sitting by your side as the day drifts by",
    "helping you hold on to a moment that made you happy",
    "now i'm hoping that you feel all the things i feel, wishing that you want me to sit beside you",
    "talking in a car in the afternoon, sitting by your side on a sunny day",
    "'do you think it'll be okay?' 'i hope so.'"
  ];
  const ind: number = Math.floor(Math.random() * myArray.length);
  return myArray[ind];
}
