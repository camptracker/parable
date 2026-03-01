export interface Lesson {
  day: number;
  title: string;
  date: string;
  standard: string;
  parable: string;
  sonnet?: string;
  image?: string;
}

export interface Series {
  id: string;
  name: string;
  theme: string;
  lessons: Lesson[];
}

export const series: Series[] = [
  {
    id: "financial-independence",
    name: "Financial Independence",
    theme: "Warren Buffett's teachings and mathematical principles",
    lessons: [
  {
    day: 1,
    title: "What Is Interest?",
    date: "2026-02-27",
    image: "images/day-1.png",
    sonnet: `**🪶 Sonnet I: The Lending of Seeds**

A boy once held a sack of golden grain,
His grandmother's last gift before she slept—
"Let not these seeds sit idle," she had kept
Her final breath to whisper through the rain.

A farmer came with nothing but his name,
And begged to borrow what the boy possessed.
"Return my sack, plus ten," the boy expressed,
And so the seeds were lent, and fortune came.

For he who lends what others need to grow
Shall find his patience paid in golden yield.
The idle hoard rots slow beneath the field,
While planted trust makes harvests overflow.

*So ask yourself before you spend or save:*
*Am I the lender — or the borrower's slave?*`,
    standard: `**💰 Day 1: What Is Interest?**

Before we can talk about building wealth, we need to understand one word: **interest**.

🧱 **The Concept**
Interest is the price of borrowing money — or the reward for lending it.

❓ **Why It Matters**
Every dollar you save or invest earns interest. Every dollar you borrow costs interest. Understanding which side you're on is the first step to financial independence.

⚙️ **How It Works**
Imagine your friend borrows $10 from you. They say "thanks, I'll give you $11 back next week." That extra $1? That's interest. You got paid for letting someone else use your money.

Banks work the same way. You put money in a savings account → the bank uses it → they pay you interest as a thank-you.

📖 **Definitions**
• **Interest**: Money paid for the use of money
• **Lender**: The person who gives the money (that's you when you save)
• **Borrower**: The person who uses the money (that's you when you take a loan)

🎯 **Buffett Wisdom**
Warren Buffett bought his first stock at age 11. He understood early: make your money work *for* you, not against you.

❓ **Tomorrow's Question:**
*What happens when you earn interest... on your interest?*`,
    parable: `**🏰 The Parable of the Seed Lender**

In a small village at the edge of a golden valley, there lived a boy named Kael who had nothing but a single sack of seeds — left to him by his grandmother, who whispered on her last day: *"Seeds are not for hoarding, child. They are for growing."*

---

One spring morning, a farmer named Tobren came to Kael's door, hat in hand.

"I have rich soil but no seeds," Tobren said. "Lend me your sack, and after the harvest, I will return it — plus ten extra handfuls, as thanks."

Kael thought carefully. The seeds were all he had. But his grandmother's words echoed in his mind.

He handed over the sack.

---

Summer passed. The rains came and went. And when autumn painted the valley in amber and gold, Tobren returned with a full sack of seeds — and ten extra handfuls, just as promised.

Kael stared at the bounty. "I did nothing," he said. "I just... let you use what I had."

Tobren smiled. "And that is exactly why you were rewarded. You gave your seeds a chance to *work*. Most people bury them in jars under their beds, where they sit and rot. You let them grow."

---

That night, Kael sat by the fire, counting his seeds. He had more than he started with — not because he toiled in the fields, but because he understood a simple truth:

> *When you lend what you have to someone who can grow it, the world pays you back with more.*

The village elders had a word for those extra ten handfuls. They called it **interest** — the reward for trusting your seeds to the soil of another.

---

**🌾 The Moral**

Every coin you save is a seed. You can bury it in a jar, where it sits unchanged. Or you can plant it — in a bank, an investment, a venture — and let it grow.

But beware: the same force works in reverse. When *you* are the borrower, it is *your* harvest that someone else reaps.

The wise ones of the valley always asked themselves: *Am I the lender of seeds — or the one paying for them?*

❓ *Tomorrow's tale: What happens when the seeds from your harvest... grow harvests of their own?*`
  },
  {
    day: 2,
    title: "Compound Interest — The Eighth Wonder",
    date: "2026-02-28",
    image: "images/day-2.png",
    sonnet: `**🪶 Sonnet II: The Doubling Garden**

The elder drew her circles in the dirt—
Each ring a season, wider than the last.
"I planted twelve," she said, "when I was young,
And never touched the harvest as it passed."

The boy watched spirals bloom beneath her hand,
Each loop embracing more than what came first.
"But how?" he asked. "You never sowed again?"
"I let the seeds repay their own sweet thirst."

For interest earned becomes the soil anew,
And growth compounds like whispers in the dawn—
A single coin, left patient, splits in two,
Then four, then eight, until a fortune's drawn.

*The secret isn't starting rich or wise—*
*It's giving time the room to multiply.*`,
    standard: `**💰 Day 2: Compound Interest — The Eighth Wonder**

Yesterday we learned that interest is the reward for lending your money. But here's where it gets exciting: *what happens when you earn interest on your interest?*

🧱 **The Concept**
Compound interest means your earnings generate their own earnings. Your money doesn't just grow — it grows *faster* over time.

❓ **Why It Matters**
This is the single most powerful force in building wealth. It's the reason someone who starts saving at 20 can end up with more money than someone who saves twice as much starting at 30. Time is the secret ingredient.

⚙️ **How It Works**
Imagine you put $100 in a jar that magically adds 10% every year. After Year 1, you have $110. But in Year 2, you earn 10% on $110 — that's $11, not $10. Year 3? You earn on $121. Each year, the pile grows a little faster than the year before.

After 10 years: $259. After 25 years: $1,083. You never added another dollar — your money just kept multiplying itself.

This is why Buffett says starting early matters more than starting big.

📖 **Definitions**
• **Simple Interest**: Interest only on the original amount
• **Compound Interest**: Interest on the original amount *plus* all previous interest
• **Compounding Period**: How often interest gets added (daily, monthly, yearly)

🎯 **Buffett Wisdom**
"My wealth has come from a combination of living in America, some lucky genes, and compound interest." Buffett made over 99% of his $100B+ fortune after age 50 — that's compounding at work.

❓ **Tomorrow's Question:**
*If compound interest is so powerful, what's the one thing that can turn it against you?*`,
    parable: `**🏰 The Parable of the Doubling Garden**

Kael sat with his extra seeds, proud of the ten handfuls Tobren had paid him. But that evening, the village elder — a woman named Sable, ancient as the hills — came to sit beside him.

---

"You learned the first lesson," Sable said, watching the fire. "Lending seeds earns more seeds. But let me tell you what I learned when I was young."

She drew a circle in the dirt.

"When I was your age, I lent twelve seeds to a merchant. At harvest, he returned twelve — plus one extra. Just one."

Kael frowned. "That's barely anything."

"Patience." Sable drew another circle. "The next season, I lent all thirteen. I got back thirteen — plus one more, and a little bit extra. Fourteen seeds now."

Another circle. "The next year, fourteen became fifteen and change. Then sixteen. Then eighteen."

She kept drawing circles — each one slightly larger than the last.

"I never added a single seed of my own after that first twelve. I just kept replanting *everything* — the original seeds and every extra seed they earned."

---

Kael stared at the spiral of circles growing in the dirt. "But... the circles are getting bigger faster."

Sable smiled. "Yes. That is the secret. The extra seeds earn their *own* extra seeds. Growth feeds growth. The elders call this **compound interest** — interest upon interest, harvest upon harvest."

She pointed to the last circle, enormous compared to the first. "Forty seasons later, my twelve seeds had become a grove that stretches beyond the eastern hill. I never worked the field myself. I simply gave my seeds *time*."

---

"How much time?" Kael asked.

"That's the true lesson," Sable whispered. "It's not about how *many* seeds you start with. It's about how many *seasons* you let them grow. A farmer who plants early with a handful will always outgrow a farmer who plants late with a cartload."

She stood, brushing off her cloak.

"Most of my grove grew in the last ten seasons — after decades of patient, quiet compounding. The early years felt slow. The late years felt like magic."

---

**🌾 The Moral**

Compound interest is not a trick. It is time made visible. Each season's harvest becomes next season's planting — and the garden expands not in a straight line, but in a widening spiral.

The key is never to eat *all* the harvest. Always replant. Always give your seeds another season.

> *"The best time to plant a seed was twenty years ago. The second best time is today."*

❓ *Tomorrow's tale: If the doubling garden is so powerful, what dark force can turn it against you?*`
  },
  {
    day: 3,
    title: "Debt — Compound Interest in Reverse",
    date: "2026-02-28",
    image: "images/day-3.png",
    sonnet: `**🪶 Sonnet III: The Thorned Path**

The garden grows for those who plant with care,
But there exists a darker, mirrored force—
When borrowed seeds demand a thorny share,
The debt compounds and swallows field and horse.

A merchant came with promises of gold,
"Take now, pay later," sweet as honeyed wine.
But every moon the interest took its hold,
And what was one became eleven, then nine-and-nine.

The vines crept slow at first, a harmless thread,
Then wrapped the barn, the plow, the granary door.
He'd borrowed spring but harvested instead
A winter debt that always wanted more.

*Beware the path where borrowed seeds are sown—*
*For compound growth cuts deepest on a loan.*`,
    standard: `**💰 Day 3: Debt — Compound Interest in Reverse**

Yesterday we saw how compound interest can turn a handful of seeds into a forest. But here's the dark side: *the exact same force works against you when you owe money.*

🧱 **The Concept**
Debt is compound interest working in reverse. Instead of your money growing for you, it grows for someone else — and you're the one paying.

❓ **Why It Matters**
Credit cards, car loans, student loans — they all use compound interest. If you only make minimum payments, you can end up paying back 2x or 3x what you originally borrowed. The same math that builds fortunes can trap people in cycles of debt for decades.

⚙️ **How It Works**
Imagine you borrow $1,000 on a credit card at 20% interest. After one year, you owe $1,200. But if you don't pay it off, next year you owe 20% on $1,200 — that's $1,440. Then $1,728. In just 4 years, your $1,000 debt nearly doubled, and you never bought anything else.

It's the Doubling Garden in reverse — except the garden is eating *your* house.

The minimum payment trap is real: a $5,000 credit card balance at 18% with minimum payments takes **decades** to pay off and costs over $12,000 total.

📖 **Definitions**
• **Debt**: Money you owe to someone else
• **Principal**: The original amount borrowed
• **APR (Annual Percentage Rate)**: The yearly interest rate on a loan or credit card
• **Minimum Payment**: The smallest amount you can pay — designed to keep you in debt longer

🎯 **Buffett Wisdom**
"I've seen more people fail because of liquor and leverage — leverage being borrowed money." Buffett has consistently warned that debt is the #1 destroyer of financial independence.

❓ **Tomorrow's Question:**
*If debt is so dangerous, how do you know the difference between "good debt" and "bad debt"?*`,
    parable: `**🏰 The Parable of the Thorned Path**

Kael was beginning to understand the power of planting seeds. But one evening, a traveling merchant arrived in the village — a man named Varen, draped in silk and smiling wide.

---

"Young man," Varen said, "why wait for your seeds to grow when you can have what you want *now*?"

He spread a blanket of treasures — a fine leather satchel, a silver compass, boots that could walk through any storm.

"Take them," Varen said. "Pay me back with seeds after the harvest. Just a small fee for the convenience."

Kael hesitated, but another villager — a young carpenter named Edrin — stepped forward eagerly.

"I'll take the boots, the satchel, *and* the compass," Edrin declared.

Varen's smile widened. "Of course. You owe me 100 seeds, plus 20 extra for each season you take to repay."

---

The first season passed. Edrin couldn't repay — he'd spent his time enjoying his new things instead of planting. His debt: 120 seeds.

The second season? He owed interest on 120. That's 144.

Third season: 173. Fourth: 207.

Edrin watched in horror as the number grew faster and faster, like thorny vines creeping across his workshop. First they took his tools. Then his timber. Then his workshop itself.

"But I only borrowed 100 seeds!" Edrin cried.

"Yes," Varen said calmly. "And the interest borrowed from the interest. That is the nature of debt."

---

Kael watched from across the square, remembering Sable's Doubling Garden. The same spiraling circles — but this time, they were spiraling *around* Edrin, squeezing tighter with each turn.

He went to Sable that night. "The merchant used the same power you showed me — the compounding — but as a weapon."

Sable nodded gravely. "The Doubling Garden has no loyalty, child. It serves whoever plants the seeds. When you save and invest, it works for you. When you borrow, it works for *them*. The math does not care whose side it's on."

---

**🌾 The Moral**

Compound interest is a tool — like fire. It can warm your home or burn it down. When you're the lender (saving, investing), the spiral grows your wealth. When you're the borrower, the spiral grows your chains.

> *The wise farmer never borrows seeds for things that don't grow more seeds.*

Before you take on any debt, ask yourself: *Will this borrowed seed plant a harvest — or just buy a prettier satchel?*

❓ *Tomorrow's tale: If debt can be a trap, can it ever be a bridge? How do you tell the difference between chains and wings?*`
  },
  {
    day: 4,
    title: "Good Debt vs Bad Debt",
    date: "2026-02-28",
    image: "images/financial-independence/day-4.jpg",
    sonnet: `**🪶 Sonnet IV: The Bridge and the Chain**

Two paths diverge where borrowed rivers flow—
One builds a bridge across the churning deep,
The other binds with chains that twist and grow
Around the fool who borrows what he'll keep.

The merchant bought a mill with borrowed gold,
Its grinding stones turned grain to flour fine—
Each season's profit paid the debt threefold,
And soon the mill was wholly, freely mine.

But Edrin borrowed for a velvet cloak,
Which frayed and faded even as he paid.
The interest grew while fabric thinned and broke—
He bought a ghost and called the debt "well-made."

*Ask not "Can I afford to borrow this?"—*
*Ask "Will it earn me more than what I give?"*`,
    standard: `**💰 Day 4: Good Debt vs Bad Debt**

Yesterday we saw how debt is compound interest working against you — the Thorned Path. But today we answer a crucial question: *if debt is so dangerous, how do you know the difference between "good debt" and "bad debt"?*

🧱 **The Concept**
Good debt puts money in your pocket over time. Bad debt takes money out. The difference isn't the amount — it's whether the borrowed money creates value greater than its cost.

❓ **Why It Matters**
Not all borrowing is reckless. A mortgage on a home that appreciates, a student loan for a high-earning career, a business loan that generates revenue — these can be bridges to wealth. A credit card balance for vacations, clothes, or dining out? That's yesterday's thorned path. The ability to tell them apart is one of the most important financial skills you'll ever develop.

⚙️ **How It Works**
Think of it as a simple test: **will this borrowed money earn me more than the interest I'll pay?**

If you borrow $10,000 at 5% interest to start a business that earns 20% returns, you're netting 15% — the debt is a tool working *for* you. If you borrow $10,000 at 20% interest to buy furniture, the furniture loses value while the debt grows. You're paying compound interest on something worth less every year.

A mortgage at 4% on a house that appreciates 6% per year? Good debt — you're gaining more than you're paying. A car loan at 8% on a vehicle that loses 20% of its value the day you drive it off the lot? The math doesn't work.

The key question isn't "can I afford the monthly payment?" — it's "will this thing I'm buying grow in value or generate income that exceeds what the debt costs me?"

📖 **Definitions**
• **Good Debt**: Borrowing that finances an asset expected to grow in value or generate income
• **Bad Debt**: Borrowing that finances consumption or depreciating assets
• **Leverage**: Using borrowed money to amplify returns (works both ways — amplifies losses too!)
• **Asset**: Something that puts money in your pocket over time
• **Liability**: Something that takes money out of your pocket over time

🎯 **Buffett Wisdom**
Buffett has used debt strategically through Berkshire Hathaway's insurance "float" — essentially borrowing at near-zero cost to invest at high returns. But he never borrows to consume. "If you're smart, you don't need leverage. If you're not smart, it will kill you."

❓ **Tomorrow's Question:**
*Now that you understand earning, compounding, and debt — what's the simplest rule for deciding how much of your income to save versus spend?*`,
    parable: `**🏰 The Parable of the Bridge and the Chain**

Word of Edrin's ruin spread quickly through the village. Some swore off borrowing entirely — "Never take a single seed from a lender!" they cried. But Sable, watching from her doorstep, shook her head.

---

"Come," she said to Kael that evening. "I want to show you something."

She led him to the river that split the village in two. On the far bank stood a flour mill — its great stone wheel turning with the current, grinding grain for the entire valley.

"That mill was built with borrowed seeds," Sable said.

Kael stared. "Borrowed? But you said debt was dangerous—"

"I said *compound interest* has no loyalty. I never said borrowing was forbidden." She pointed to the mill. "Thirty years ago, a woman named Petra had no seeds of her own. She borrowed 500 from a merchant — with interest, she owed 600 by year's end."

"That sounds like Edrin's story," Kael said.

"Listen. Petra used those 500 seeds to build *this mill*. In its first season, the mill earned her 200 seeds from grinding fees. She paid back 100 toward her debt and reinvested the rest. By the third year, the mill earned 400 seeds per season. She paid the debt in full and has been profiting ever since."

---

Kael thought about this. "So Petra borrowed seeds... to build something that *grows more seeds*."

"Exactly." Sable drew two lines in the dirt. "There are two kinds of borrowed seeds. The first kind you plant in fertile soil — a business, a skill, land that produces. The debt costs you interest, but the thing you bought earns you *more* than the interest. The borrowed seeds built a bridge to wealth."

She drew the second line — tangled and knotted. "The second kind you spend on things that wilt. A velvet cloak. A feast. A shiny trinket. These things don't earn seeds. They don't grow. They just sit there losing value while the debt underneath them grows thorns."

---

"So how do I know which is which?" Kael asked.

Sable held up one finger. "Ask one question before you borrow: **will this thing I'm buying earn me more seeds than the debt will cost me?** If the answer is yes — and you've done the math honestly — then the debt is a bridge. If the answer is no, or you haven't done the math, it's a chain."

She looked toward Edrin's shuttered workshop. "Edrin never asked that question. He just wanted the boots."

---

Kael nodded slowly. The same force — compound interest — could build a mill or destroy a carpenter. It depended entirely on what you did with the borrowed seeds.

"Remember," Sable said as they walked home. "The wise never say 'I can afford the payments.' They say 'Will this earn more than it costs?' Those are very different questions."

---

**🌾 The Moral**

Debt is a river. You can build a bridge across it — borrowing to invest in something that grows — or you can fall in and let the current pull you under. The difference is never the act of borrowing itself. It's *what you do with what you borrow.*

> *"Before you take a single borrowed seed, ask: am I building a mill, or buying a cloak?"*

❓ *Tomorrow's tale: Kael has learned to earn, to compound, and to borrow wisely. But how much of each harvest should he keep for himself — and how much should he replant?*`
  }
    ]
  },
  {
    id: "nutrition-science",
    name: "Nutrition Science",
    theme: "the science of how food fuels your body, from macronutrients to metabolism",
    lessons: [
      {
        day: 1,
        title: "What Is a Calorie?",
        date: "2026-02-28",
        image: "images/nutrition-science/day-1.png",
        sonnet: `**🪶 Sonnet I: The Measure of Fire**

Before the feast, before the bread is blessed,
Before the wine is poured, the table set—
There burns a truth inside each morsel's breast:
A tiny flame the ancients called "the debt."

For every bite you take is borrowed heat,
A spark of sun trapped deep in grain and fruit,
The energy that moves your hands and feet,
That fuels the mind from blossom down to root.

The healer held a seed above the flame—
"This holds the fire of a thousand suns,
And whether feast or famine, all the same,
Your body counts each spark before it runs."

*To eat is not to fill — it is to burn.*
*Know what you feed the fire, and wisdom learn.*`,
        standard: `**🍎 Day 1: What Is a Calorie?**

Before we can understand nutrition, we need to understand one word: **calorie**.

🧱 **The Concept**
A calorie is a unit of energy. It measures how much fuel your body gets from food.

❓ **Why It Matters**
Everything your body does — breathing, thinking, walking, even sleeping — requires energy. Calories are how we measure that energy. Understanding calories is the foundation of every nutrition decision you'll ever make.

⚙️ **How It Works**
Imagine your body is a campfire. Food is the wood. A calorie is how we measure how much heat each piece of wood gives off. A small twig (a celery stick) barely keeps the fire going. A big log (a slice of pizza) burns hot and long.

Your body needs a certain number of calories per day just to survive — this is called your Basal Metabolic Rate (BMR). For most adults, that's 1,400–2,000 calories just for basic functions. Add movement, exercise, and thinking, and you need more.

If you eat more calories than you burn → your body stores the extra as fat (saving wood for later).
If you eat fewer than you burn → your body uses stored fat for energy (burning the reserves).

📖 **Definitions**
• **Calorie**: A unit of energy from food (technically a kilocalorie, or kcal)
• **BMR (Basal Metabolic Rate)**: Calories your body burns at rest just to keep you alive
• **TDEE (Total Daily Energy Expenditure)**: BMR + all activity — the total calories you burn in a day
• **Caloric Surplus**: Eating more than your TDEE → weight gain
• **Caloric Deficit**: Eating less than your TDEE → weight loss

🎯 **Science Wisdom**
"A calorie is a calorie" is technically true for energy math — but not all calories affect your body the same way. 100 calories of broccoli and 100 calories of candy have very different effects on hunger, hormones, and health. The number matters, but the *source* matters more.

❓ **Tomorrow's Question:**
*If calories are energy, what are the three types of fuel your body can burn — and why does it matter which one you eat?*`,
        parable: `**🏰 The Parable of the Three Fires**

In a village beyond the mountains, there lived a healer named Maren who kept three fires burning in her kitchen — never more, never less.

---

One winter evening, a young apprentice named Lila arrived at her door, shivering and hungry.

"Please," Lila said. "I've walked three days. I need food."

Maren set a bowl of warm stew before her. But before Lila could eat, the healer held up her hand.

"Tell me first — what is food?"

Lila blinked. "It's... what you eat when you're hungry?"

Maren shook her head. "Food is *fire*. Every bite you take carries a tiny flame inside it. Your body doesn't eat food — it *burns* it."

---

She led Lila to the three hearths.

"Watch." Maren tossed a small twig into the first fire. It flickered briefly and died. "That is a leaf of lettuce. A whisper of flame."

She placed a thick branch in the second fire. It crackled and burned steadily for minutes. "That is a bowl of rice. A slow, steady burn."

Then she dropped a dense, resinous log into the third fire. It roared to life, burning hot and long. "And that is a spoonful of oil. A fire that lasts."

---

"Your body is these three hearths," Maren said. "Every day, they need a certain amount of fuel just to keep burning — to keep your heart beating, your lungs breathing, your mind thinking. This is your *resting fire*."

"What happens if I feed them too much?" Lila asked.

"The extra fuel doesn't vanish. Your body wraps it up and stores it — like stacking wood in the cellar for winter."

"And if I don't feed them enough?"

Maren smiled. "Then your body opens the cellar and burns what's stored."

---

Lila looked at her stew with new eyes. It wasn't just food. It was fuel. Fire. Energy.

"How do I know how much fire I need?" she asked.

"Ah," said Maren. "That is tomorrow's lesson."

---

**🌾 The Moral**

Every bite of food is a tiny flame. Your body is the hearth. Understanding how much fire you need — and how much you're feeding it — is the first step to nourishing yourself wisely.

> *"To eat without knowing is to burn without watching the fire."*

❓ *Tomorrow's tale: What are the three types of fuel — and why does Maren keep three separate hearths?*`
      },
      {
        day: 2,
        title: "Macronutrients — The Three Fuels",
        date: "2026-02-28",
        image: "images/nutrition-science/day-2.png",
        sonnet: `**🪶 Sonnet II: The Three Hearths**

Three fires burn within the healer's hall,
Each fed by different wood, each serving need—
The first burns bright and answers hunger's call,
A flash of warmth from sugar, fruit, and seed.

The second smolders patient, firm, and true,
It mends the walls and fortifies the frame—
From egg and fish and bean, the body grew
Its sinew, muscle, bone — repaired the same.

The third burns slow, a deep and lasting glow,
A reservoir of heat against the cold—
From nut and oil, its embers barely show,
Yet carry twice the fire, if truth be told.

*Three fuels, three fires, three purposes they keep—*
*Know what you burn, and master what you eat.*`,
        standard: `**🍎 Day 2: Macronutrients — The Three Fuels**

Yesterday we learned that a calorie is a unit of energy — the fire your body burns. Today we answer: *what are the three types of fuel, and why does it matter which one you eat?*

🧱 **The Concept**
Macronutrients are the three main types of fuel in food: carbohydrates, protein, and fat. Each one provides calories, but they serve very different roles in your body.

❓ **Why It Matters**
Not all calories are created equal. 200 calories of chicken, 200 calories of bread, and 200 calories of olive oil affect your energy, hunger, and body composition in completely different ways. Understanding macros is how you go from "counting calories" to actually understanding nutrition.

⚙️ **How It Works**
Think of your body as a house with three needs: electricity (quick energy), building materials (structure), and a backup generator (long-term reserves).

**Carbohydrates** are electricity — they burn fast and give you immediate energy. Bread, rice, fruit, sugar — your body breaks them down quickly into glucose, which powers your brain and muscles right now. 1 gram = 4 calories.

**Protein** is building material — it repairs muscle, skin, hair, organs, and immune cells. Chicken, eggs, fish, beans — your body uses these to rebuild itself. You're constantly under construction. 1 gram = 4 calories.

**Fat** is the backup generator — it burns slow and steady, stores massive amounts of energy, and protects your organs. Nuts, oils, avocado, butter — fat carries more than double the energy of carbs or protein. 1 gram = 9 calories.

📖 **Definitions**
• **Macronutrients ("Macros")**: Nutrients your body needs in large amounts — carbs, protein, fat
• **Carbohydrates**: Quick-burning fuel; your body's preferred energy source
• **Protein**: The building and repair nutrient; essential for muscle and tissue
• **Fat**: Dense, slow-burning energy; vital for hormones and cell membranes
• **Micronutrients**: Vitamins and minerals — needed in tiny amounts (that's a future lesson!)

🎯 **Science Wisdom**
Your body can convert between fuel types in a pinch — it can turn extra carbs into fat for storage, or break down protein for energy in an emergency. But each macro does its primary job best. Eating the right balance isn't about restriction — it's about giving your body the right tool for each job.

❓ **Tomorrow's Question:**
*You know the three fuels now — but how does your body actually decide which one to burn first, and can you control it?*`,
        parable: `**🏰 The Parable of the Three Hearths**

The next morning, Lila woke to the smell of porridge and the crackle of three fires. Maren was already at work, tending each hearth with different fuel.

---

"You promised to tell me about the three types of fire," Lila said, pulling her blanket tighter.

Maren nodded and led her to the first hearth.

"This one I feed with dry straw and kindling." She tossed in a handful of straw — it caught instantly, blazing bright and hot, then quickly dimming. "This is the fire of **carbohydrates**. It lights fast, burns fast, and gives you energy *right now*. Bread, rice, fruit, honey — they are your body's kindling."

"It's warm," Lila said. "But it doesn't last."

"Exactly. Quick fuel for quick needs. Your brain, your muscles when you run — they reach for this fire first."

---

They moved to the second hearth. Here, Maren placed carefully cut blocks of hardwood — dense, solid, slow to catch.

"This is **protein**. It doesn't burn as brightly, because burning it isn't its true purpose." She ran her hand along the stone mantel. "Protein is the *builder*. It repairs the walls of this house. It mends what breaks. Every muscle, every scar, every strand of hair — built from this wood."

"So it's not really fuel?" Lila asked.

"It *can* burn for energy — but that's like tearing down your walls for firewood. You only do it when you're desperate."

---

The third hearth burned low and deep — a thick, resinous log that glowed with an almost invisible heat but radiated warmth across the entire room.

"**Fat**," Maren said simply. "The slowest fire. The deepest reserve. One log of fat holds more than twice the heat of the same size log of kindling or hardwood."

Lila's eyes widened. "Twice?"

"More. This is your body's cellar — the fuel it stores for winter, for famine, for the long journey. Nuts, oils, the marrow of bones. It also protects your organs like padding and keeps your body's messengers — your hormones — working."

---

Lila stood in the center of the three hearths, feeling their different warmths.

"So my body burns all three?"

"Every day," Maren said. "But not equally. It reaches for kindling first — quick energy. It uses hardwood to rebuild. And it keeps the deep logs in reserve, burning them slowly when needed."

She placed a hand on Lila's shoulder. "The art of eating well is not about feeding one hearth and starving the others. It's about giving each fire the right fuel, in the right amount, at the right time."

---

**🌾 The Moral**

Your body runs on three fuels: carbohydrates for quick energy, protein for building and repair, and fat for deep reserves. Each serves a purpose. The wise eater doesn't fear any of them — they learn to balance all three.

> *"A house with only kindling burns bright but collapses. A house with only stone stands cold. A house with all three endures."*

❓ *Tomorrow's tale: Lila asks — when all three fuels are available, how does the body choose which to burn? And can you change its mind?*`
      },
      {
        day: 3,
        title: "Fuel Priority — How Your Body Chooses What to Burn",
        date: "2026-02-28",
        image: "images/nutrition-science/day-3.png",
        sonnet: `**🪶 Sonnet III: The Order of Flames**

The healer spoke of order in the burn—
Not chaos rules the body's inner fire,
But ancient laws that every cell must learn:
Which fuel to reach for first, which to retire.

The kindling catches quick — the sugar's blaze,
It lights the blood and feeds the racing mind.
But when the straw is spent in fleeting days,
The deeper logs are next the flames will find.

First carbohydrate's flash, then fat's slow glow,
And only when the cellar shelves run bare
Does protein burn — the walls begin to go,
The body eating what it built with care.

*You hold the match that chooses what will burn—*
*Feed wisely, and the order serves your turn.*`,
        standard: `**🍎 Day 3: Fuel Priority — How Your Body Chooses What to Burn**

Yesterday we met the three macronutrients: carbs (kindling), protein (building material), and fat (deep reserves). Today we answer: *how does your body decide which one to burn first — and can you control it?*

🧱 **The Concept**
Your body burns fuel in a specific priority order: carbohydrates first, then fat, and protein only as a last resort. This hierarchy isn't random — it's survival logic built over millions of years.

❓ **Why It Matters**
If you want to lose fat, build muscle, or just have steady energy throughout the day, you need to understand this fuel ladder. Most diets — keto, low-carb, intermittent fasting — are really just strategies for manipulating which rung your body is on.

⚙️ **How It Works**
Picture a house with three fuel sources stacked in order:

**Level 1 — Carbs (burn first).** When you eat carbs, your body converts them to glucose. Glucose is the easiest, fastest fuel to burn, so your body always reaches for it first. It's like grabbing the newspaper to start a fire — quick and effortless. Your blood sugar rises, insulin shuttles glucose to cells, and you get immediate energy.

**Level 2 — Fat (burn second).** Once available glucose runs low (a few hours after eating, or during light exercise), your body shifts to burning stored fat. This is the slow, steady backup generator. It takes more effort to convert fat into energy, but there's a LOT of it stored — even a lean person carries 50,000+ calories in fat reserves.

**Level 3 — Protein (emergency only).** Your body really doesn't want to burn protein. That's like tearing down your walls for firewood. It only happens during starvation, extreme dieting, or very prolonged exercise when carbs and fat are depleted. This is why crash diets cause muscle loss.

**Can you control it?** Yes! If you eat fewer carbs, your body shifts to fat-burning sooner. That's the entire principle behind low-carb and keto diets. Exercise also accelerates the shift — moderate activity burns through glucose faster and taps fat reserves.

📖 **Definitions**
• **Fuel Priority (Oxidative Hierarchy)**: The order in which your body prefers to burn macronutrients
• **Glycogen**: Stored glucose in your muscles and liver — your carb reserve tank (~2,000 calories worth)
• **Lipolysis**: The process of breaking down stored fat for energy
• **Gluconeogenesis**: Your body making glucose from non-carb sources (protein, glycerol) in emergencies
• **Ketosis**: When carb stores are very low and your body shifts to burning fat as its primary fuel

🎯 **Science Wisdom**
Your body is an incredibly smart machine. It always burns the most efficient fuel available before tapping deeper reserves. You don't need to "trick" it — you just need to understand what's on the shelf when it goes looking for energy.

❓ **Tomorrow's Question:**
*You know carbs burn first and fast — but not all carbs are equal. What makes some carbs give you steady energy while others spike and crash?*`,
        parable: `**🏰 The Parable of the Burning Order**

That evening, Lila sat by the three hearths, watching Maren cook. A question had been turning in her mind all day.

---

"Maren," she said, "if all three fuels sit in the kitchen, how does the fire know which to burn first?"

Maren set down her ladle and smiled — the smile of a teacher who has been waiting for exactly this question.

"The fire doesn't choose. The *house* chooses."

She walked to the first hearth, where dry straw sat piled high. "When there is kindling available, the house always reaches for it first. It's the easiest to light, the fastest to burn. Your body does the same — when you eat bread or fruit or rice, the glucose hits your blood within minutes. Quick fire. Immediate warmth."

"And when the kindling runs out?" Lila asked.

---

Maren moved to the third hearth — the deep, glowing one fed by dense resinous logs.

"When the straw is gone, the house opens the cellar and pulls out the heavy logs. Fat. It takes longer to catch, longer to burn, but the heat lasts for hours." She placed her hand near the embers. "Even a thin person carries enough logs in their cellar to heat this house for weeks."

"So the body burns fat second?"

"Always. It's the reserve — patient, waiting, enormous. Most people never empty their cellar because they keep restocking the kindling before it runs out."

---

Lila's eyes drifted to the second hearth — the hardwood blocks.

"And the building wood? The protein?"

Maren's face grew serious. "That is the last resort. The house will tear planks from its own walls before it lets the fires die completely. But it *hates* doing it. Burning protein means burning muscle, burning the structures that hold you together."

She gripped Lila's arm gently. "This is why people who starve themselves don't just lose fat — they lose strength. Their body, desperate for fuel, begins dismantling itself."

---

"Can I choose which hearth burns?" Lila asked.

"You already do," Maren said. "Every time you eat, you're stacking kindling on the first hearth. If you want the cellar logs to burn, you have to let the kindling run low first. And if you move your body — walk, carry, climb — you burn through the kindling faster and reach the deeper fuel sooner."

She stirred the pot once more. "Every meal is a choice: *which hearth am I feeding? Which fire do I want to burn?*"

---

Lila sat quietly, watching the three fires dance at their different speeds — one bright and fast, one deep and steady, one barely touched.

"Tomorrow," Maren said, "I'll show you why not all kindling burns the same. Some straw gives steady warmth. Other straw explodes in a flash and leaves you colder than before."

---

**🌾 The Moral**

Your body follows a strict order: burn carbs first (quick fuel), then fat (deep reserves), then protein (only in desperation). Understanding this order is the key to controlling your energy, your weight, and your health.

> *"The wise keeper of the hearth does not fear an empty kindling pile — she knows the cellar is full."*

❓ *Tomorrow's tale: Why does some kindling burn steady and warm, while other kindling flares bright and dies — leaving the house colder than before?*`
      },
      {
        day: 4,
        title: "Simple vs Complex Carbs — The Glycemic Index",
        date: "2026-02-28",
        image: "images/nutrition-science/day-4.jpg",
        sonnet: `**🪶 Sonnet IV: The Straw and the Braid**

Two bundles lay before the healer's door—
One loose and dry, the other tightly wound.
She lit the first: it blazed and was no more,
A flash of heat that vanished without sound.

The second caught with patience, strand by strand,
Its braided fibers slowly feeding flame—
A steady warmth that spread across the land
Of blood and bone, consistent, sure, and tame.

"The sugar burns like scattered straw," she said,
"A rush of fire, then emptiness and cold.
But complex chains release their warmth instead
In measured waves, as fiber's grip takes hold."

*Not all that's sweet gives lasting warmth within—*
*The braided burn outlasts the fastest spin.*`,
        standard: `**🍎 Day 4: Simple vs Complex Carbs — The Glycemic Index**

Yesterday we learned that your body burns carbs first — they're the kindling, the quick fuel. But today we answer: *what makes some carbs give you steady energy while others spike and crash?*

🧱 **The Concept**
Not all carbohydrates burn at the same speed. Simple carbs (sugar, white bread, candy) hit your bloodstream fast and leave you crashing. Complex carbs (oats, brown rice, vegetables) release energy slowly and keep you fueled for hours. The Glycemic Index measures this speed.

❓ **Why It Matters**
This is why you feel energized after oatmeal but sluggish an hour after donuts. The speed at which carbs raise your blood sugar affects your energy, hunger, mood, and over time — your risk of diabetes, obesity, and heart disease. Same calorie count, wildly different outcomes.

⚙️ **How It Works**
Imagine two piles of kindling. One is loose, dry straw — you toss it in the fire and WHOOSH, it blazes up instantly, burns hot for 30 seconds, then it's gone. You're left colder than before. That's a **simple carb** — white sugar, soda, white bread. Your blood sugar spikes, your pancreas floods you with insulin to bring it down, and you crash. You're hungry again in an hour.

The other pile is tightly braided rope. It catches slowly, burns at a steady pace, and gives off consistent heat for hours. That's a **complex carb** — oatmeal, sweet potatoes, lentils, whole grains. The fiber and structure slow down digestion, so glucose trickles into your blood instead of flooding it.

The **Glycemic Index (GI)** scores foods from 0-100 based on how fast they raise blood sugar:
- **High GI (70+)**: White bread, candy, soda, white rice — fast spike, fast crash
- **Medium GI (56-69)**: Whole wheat bread, brown rice, bananas
- **Low GI (0-55)**: Oats, lentils, most vegetables, nuts — slow, steady energy

📖 **Definitions**
• **Simple Carbohydrates**: Short sugar chains (1-2 molecules) that digest rapidly — glucose, fructose, sucrose
• **Complex Carbohydrates**: Long chains of sugar molecules that take longer to break down — starches, fiber
• **Glycemic Index (GI)**: A scale (0-100) measuring how quickly a food raises blood sugar
• **Insulin**: The hormone your pancreas releases to move glucose from blood into cells
• **Blood Sugar Crash**: The fatigue and hunger that follows a rapid spike when insulin overshoots

🎯 **Science Wisdom**
Fiber is the secret weapon. It wraps around carbohydrate molecules and forces your body to digest them slowly — turning what would be a spike into a steady burn. This is why an apple (with fiber) affects you differently than apple juice (fiber removed), even though they have similar sugar content. Always eat the whole fruit.

❓ **Tomorrow's Question:**
*We've been focused on carbs — but what about protein? How much do you actually need, and what happens if you don't get enough?*`,
        parable: `**🏰 The Parable of the Two Bundles**

Lila had spent the morning hauling water from the well — a task that left her arms trembling and her stomach growling. She stumbled into the kitchen and reached for a jar of honey, spooning it straight into her mouth.

---

Within minutes, warmth flooded her body. Energy surged through her limbs. "I feel amazing," she said, wiping her chin.

Maren watched from her stool but said nothing.

Twenty minutes later, Lila was slumped against the wall, more exhausted than before. "What happened?" she whispered. "I just ate..."

"You lit scattered straw," Maren said.

---

The healer took two bundles from the shelf and held them up.

The first was a loose pile of dry straw — thin, wispy, falling apart in her hands. "This is honey. White bread. Sugar. It's kindling with no structure." She tossed it into the first hearth. It erupted in a blaze — brilliant, hot, *brief*. Within seconds, it was ash. The hearth felt colder than before.

"Your body burns this instantly," Maren said. "Your blood fills with fire all at once. Your body panics — too much heat! — and sends out a flood of water to douse it." She mimed dumping a bucket. "The fire dies. You're left colder and hungrier than you started."

Lila stared at the empty hearth. "That's exactly what happened to me."

---

Maren held up the second bundle — straw that had been tightly braided into a thick, dense cord. "This is oats. Lentils. Sweet potato. The same material — but *structured*."

She placed it in the hearth. It caught slowly, one strand at a time. The flame built gradually, burned steadily, and continued giving off heat long after the loose straw had turned to ash.

"The braiding is **fiber**," Maren explained. "It wraps around the fuel and forces the fire to work for it. Your body can't burn it all at once — it has to unravel it strand by strand. So the heat comes slowly, evenly, for hours."

---

"So all kindling is not the same," Lila said.

"Not even close. The village bakers know this. When they make white bread, they strip away the braid — they remove the husk, the fiber, the structure. What's left burns fast and hot. But when they leave the grain whole?" Maren held up a rough, dark loaf. "The fire lasts all morning."

She poured Lila a bowl of porridge made from whole oats, topped with nuts and a sliced pear.

"Eat this. Watch what happens."

Lila ate. The warmth came slowly this time — no surge, no rush. Just a steady, building glow that was still burning an hour later when she went back to the well. She hauled water until sunset without flagging.

---

**🌾 The Moral**

All carbohydrates are kindling — but their structure determines whether they burn in a flash or sustain you for hours. Loose straw (simple sugars) gives a spike and a crash. Braided cord (complex carbs with fiber) gives steady, lasting energy.

> *"The wise do not ask 'how much kindling?' but 'how is it bound?' For the same straw, braided, outlasts a bonfire of loose chaff."*

❓ *Tomorrow's tale: Lila has mastered the kindling. But what about the hardwood — the building fuel? How much does the body truly need, and what crumbles when it doesn't get enough?*`
      }
    ]
  }
];

// Helper to find a series by id
export function getSeriesById(id: string): Series | undefined {
  return series.find(s => s.id === id);
}
