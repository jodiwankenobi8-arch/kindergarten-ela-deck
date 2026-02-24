# Kindergarten ELA Slide Deck - Component Documentation

## 📋 Table of Contents

1. [Main Slide Component Architecture](#main-slide-component-architecture)
2. [Reusable Layout Components](#reusable-layout-components)
3. [Reusable UI Components](#reusable-ui-components)
4. [Individual Slide Components](#individual-slide-components)
5. [Images and Assets](#images-and-assets)
6. [Decorative Elements](#decorative-elements)

---

## 1. Main Slide Component Architecture

### **SlideLayout Component** (`/src/app/components/SlideLayout.tsx`)

The primary layout wrapper for most slides in the deck.

**Props:**

```typescript
interface SlideLayoutProps {
  type?:
    | "welcome"
    | "instruction"
    | "video"
    | "interactive"
    | "placeholder"
    | "review";
  title?: string;
  subtitle?: string;
  children: ReactNode;
  timer?: number;
  activeTimer?: boolean;
}
```

**Features:**

- **Background:** Soft sand (#F4E9DA) beach-themed color
- **Wave Decorations:** Animated SVG waves at bottom (only on 'welcome' type)
- **Timer Display:** Optional timer in top-right corner
- **Title/Subtitle:** Centered header text with custom styling
- **Animations:** Built-in CSS keyframe animations for waves and pulse effects

**Usage Example:**

```tsx
<SlideLayout
  type="welcome"
  title="Welcome Readers!"
  subtitle="Get ready to learn!"
>
  <div>Your content here</div>
</SlideLayout>
```

---

### **UFLISlideLayout Component** (`/src/app/components/UFLISlideLayout.tsx`)

Specialized layout for UFLI phonics instruction slides (Lesson 54, Day 1).

**Props:**

```typescript
interface UFLISlideLayoutProps {
  children: ReactNode;
  timerProps?: {
    minutes: number;
    seconds: number;
    running: boolean;
    onToggle: () => void;
  } | null;
}
```

**Features:**

- **Interactive Timer:** Circular progress timer with click-to-pause functionality
- **Timer Animations:** Pulse effect when timer is running
- **Conic Gradient:** Visual countdown with color-coded progress
- **Content Area:** 80% of screen width and height for optimal viewing
- **Sound Alerts:** Beep at 10 seconds, buzz at time-up

**Timer Sessions:**

1. **Session 1:** 2 minutes - Phonemic Awareness (Slides 10-11)
2. **Session 2:** 3 minutes - Visual Drill (Slides 12-29)
3. **Session 3:** 5 minutes - Auditory Drill (Slides 30-31)
4. **Session 4:** 5 minutes - Blending Drill (Slides 32-33)
5. **Session 5:** 15 minutes - New Concept & Practice (Slides 34+)

---

## 2. Reusable Layout Components

### **SlideNavigation** (`/src/app/components/SlideNavigation.tsx`)

Bottom navigation bar with slide controls and progress.

**Features:**

- Previous/Next buttons with keyboard support
- Slide counter (e.g., "42 / 95")
- Current slide title display
- Beach-themed colors (ocean blue background)
- Disabled state for first/last slides

**Keyboard Shortcuts:**

- ⬅️ Left Arrow, Page Up, 'P' → Previous slide
- ➡️ Right Arrow, Page Down, Space, 'N' → Next slide
- Home → First slide
- End → Last slide

---

### **TableOfContents** (`/src/app/components/TableOfContents.tsx`)

Side panel with full slide list and download options.

**Features:**

- Hamburger menu button (☰) with toggle
- Home button to jump to navigation slide
- Scrollable list of all 95 slides
- Current slide highlighting
- Auto-scroll to current slide when opened
- Download buttons section at bottom
- Collapsible "Download Options" menu

**Download Options:**

1. **Project Documentation** - README.md file with full project details
2. **All Slides as Images** - ZIP file with PNG screenshots of all slides

---

### **Timer** (`/src/app/components/Timer.tsx`)

Circular countdown timer component.

**Features:**

- Visual progress ring
- Minutes:Seconds display format
- Click to pause/resume
- Color-coded (ocean blue → seafoam)
- Pulse animation when active

---

### **ErrorBoundary** (`/src/app/components/ErrorBoundary.tsx`)

React error boundary for graceful error handling.

**Features:**

- Catches React component errors
- Displays user-friendly error message
- Prevents entire app from crashing
- Shows error details in development mode

---

## 3. Reusable UI Components

### **Beach Theme Decorations**

#### Wave Animations (Built into SlideLayout)

**SVG Wave Patterns:**

```tsx
// Two-layer animated waves
<svg viewBox="0 0 1200 120">
  <path
    d="M0,0 Q300,50 600,0 T1200,0 L1200,120 L0,120 Z"
    fill="#6FA8DC"
    opacity="0.3"
    className="animate-wave"
  />
  <path
    d="M0,20 Q300,70 600,20 T1200,20 L1200,120 L0,120 Z"
    fill="#6FA8DC"
    opacity="0.2"
    className="animate-wave-slow"
  />
</svg>
```

**Animations:**

- `animate-wave`: 3 second oscillation (25px amplitude)
- `animate-wave-slow`: 4 second oscillation (15px amplitude)

---

### **Icons and Visual Elements**

#### From Lucide React Library

Used throughout the presentation for consistent, scalable icons:

**Navigation & Interface:**

- `Menu` - Table of contents toggle
- `X` - Close TOC panel
- `Home` - Jump to navigation slide
- `ChevronLeft` / `ChevronRight` - Slide navigation arrows
- `Clock` - Timer icon
- `Download` - Download buttons
- `Image` - Slide export button

**Lesson Content Icons:**

- `Music` - Songs section roadmap icon
- `BookOpen` - UFLI Phonics roadmap icon
- `Eye` - Sight Words roadmap icon
- `BookText` - Savvas Reading roadmap icon
- `CheckCircle` - Celebration roadmap icon
- `Check` - Checkboxes in I Can Statements slide
- `Waves` - Welcome slide decoration

---

### **Mascot: Reading Bird**

**Image Asset:** `figma:asset/3c5f456ff361271f7d99297678004fcd37902fc2.png`

**Location:** Slide 1 (Welcome)

**Usage:**

```tsx
import birdImage from "figma:asset/3c5f456ff361271f7d99297678004fcd37902fc2.png";

<img
  src={birdImage}
  alt="Reading bird mascot"
  className="w-48 h-48 object-contain"
/>;
```

**Characteristics:**

- Friendly, approachable design
- Perfect for kindergarten audience
- Positioned at top of welcome slide
- 192px × 192px display size

---

## 4. Individual Slide Components

### **A. Welcome & Navigation Slides**

#### **Slide01Welcome** - Welcome Screen

```tsx
<SlideLayout type="welcome">
  <img src={birdImage} alt="Reading bird mascot" />
  <h1>Welcome Readers!</h1>
  <p>Get your brain ready to learn!</p>
</SlideLayout>
```

**Features:** Bird mascot, animated waves, welcoming message

---

#### **Slide02ICanStatements** - Learning Objectives

```tsx
<SlideLayout>
  {statements.map((statement, index) => (
    <div onClick={() => toggleCheck(index)}>
      <CheckCircle />
      <p>{statement}</p>
    </div>
  ))}
</SlideLayout>
```

**Features:**

- 3 interactive checkboxes
- Click to check/uncheck
- Statements stored in state
- Ocean blue borders and checks

**Learning Statements:**

1. Read long A words with silent E
2. Read sight words fast without sounding them out
3. Tell why an author wrote a story

---

#### **Slide03Roadmap** - Learning Journey

```tsx
<SlideLayout
  title="Today's Journey"
  subtitle="What adventures await us!"
>
  {activities.map((activity, index) => (
    <div onClick={() => onGoToSlide(activity.slideIndex)}>
      <activity.icon />
      <p>{activity.label}</p>
      <p>{activity.time}</p>
    </div>
  ))}
</SlideLayout>
```

**Features:**

- 5 clickable lesson sections
- Icon-based navigation
- Time estimates per section
- Dynamic highlighting of current section
- Scale animations on hover/current
- Direct navigation to each section

**Sections:**

1. 🎵 Songs (8 min) → Slide 3
2. 📖 UFLI Phonics (30 min) → Slide 7
3. 👁️ Sight Words (8 min) → Slide 68
4. 📚 Savvas Story (15 min) → Slide 77
5. ✅ Celebration (2 min) → Slide 92

---

### **B. Video Slides**

#### **VideoSlides.tsx** - Embedded YouTube Videos

Contains three video components:

**1. Slide04AlphabetSong**

```tsx
<iframe src="https://www.youtube.com/embed/BELlZKpi1Zs?autoplay=1" />
```

- **Title:** "Alphabet Song"
- **Subtitle:** "Sing along with Jack Hartmann!"
- **Duration:** ~2:30

**2. Slide05ShortASong**

```tsx
<iframe src="https://www.youtube.com/embed/ljN_Fv-UaZw?autoplay=1" />
```

- **Title:** "Short A Song"
- **Subtitle:** "🍎 Let's practice short A sounds!"
- **Duration:** ~1:00

**3. Slide06LongASong**

```tsx
<iframe src="https://www.youtube.com/embed/1CfOWQZ2UYs?autoplay=1" />
```

- **Title:** "Long A Song"
- **Subtitle:** "🦍 Let's practice long A sounds!"
- **Duration:** ~1:30

**Video Slide Features:**

- Auto-play enabled
- 800×450 dimensions
- Rounded corners with shadow
- Seafoam green container background
- Fullscreen allowed

---

### **C. UFLI Phonics Slides** (Lesson 54, Day 1)

#### **Schedule Slides**

Progress tracking slides with checkmarks:

1. **Slide07BUFLISchedule** - Initial schedule
2. **Slide09ASchedule** - After Phonemic Awareness ✓
3. **Slide09SScheduleAuditory** - After Visual Drill ✓
4. **Slide09UScheduleBlending** - After Auditory Drill ✓
5. **Slide09XScheduleNewConcept** - After Blending ✓
6. **Slide09AL4ScheduleSummary** - Final schedule ✓

Each displays:

- Current activity highlighted
- Completed activities with checkmarks
- Upcoming activities grayed out
- Time estimates

---

#### **Visual Drill Slides** (Slides 13-28)

Letter recognition slides with images.

**Pattern:**

```tsx
<UFLISlideLayout timerProps={timerProps}>
  <img
    src={letterImg}
    alt="Letter X"
    className="max-w-full max-h-full object-contain"
  />
</UFLISlideLayout>
```

**Letters Covered:**
S, A, I, O, E, U, N, M, T, P, D, X, C, G, L, V

**Features:**

- Full-screen letter cards
- Clean, high-contrast design
- Timer in top-right (3 minutes total)
- Optimized for classroom projector display

---

#### **New Concept Slides** (Slides 35-53)

Teaching long A with silent E pattern.

**Key Slides:**

1. **Slide09ZLetterAApple** - Short A (🍎 apple)
2. **Slide09AALetterAAcorn** - Long A (🌰 acorn)
3. **Slide09ABPatternAE** - A_E pattern introduction
4. **Word Pairs:**
   - tap → tape
   - cap → cape
   - mad → made

5. **Slide09AJSoundCard** - Articulatory card
6. **Watch Me Read/Spell** - Teacher modeling
7. **Read/Spell Together** - Guided practice

---

#### **Formative Check Slides** (Slides 55-66)

Interactive assessment with thumbs up/down.

**Component Structure:**

```tsx
function FormativeWordSlide({ word, questionNumber }) {
  return (
    <div>
      <div>👍 Long A</div>
      <div>👎 Short A</div>
      <div className="word-display">{word}</div>
    </div>
  );
}

function FormativeAnswerSlide({
  word,
  type,
  sound,
  questionNumber,
}) {
  // Highlights correct answer
  // Underlines silent E if long A
}
```

**6 Word Pairs:**

1. cake (long) / cat (short)
2. tape (long) / tap (short)
3. made (long) / mad (short)
4. cape (long) / cap (short)
5. bake (long) / back (short)
6. game (long) / gab (short)

---

### **D. Sight Word Slides** (Slides 68-77)

#### **Pattern: Introduction + Spelling**

Each sight word has two slides:

**1. Video Introduction Slide**

```tsx
<SlideLayout type="video" title="Sight Word: away">
  <iframe src="https://www.youtube.com/embed/rKFSPUJtH7Q?autoplay=1" />
</SlideLayout>
```

**2. Spelling Practice Slide**

```tsx
<SlideLayout title="Let's Spell: away">
  <div className="flex gap-8">
    {letters.map((letter) => (
      <div className="letter-box">{letter}</div>
    ))}
  </div>
</SlideLayout>
```

**Sight Words Taught:**

1. **away** - HeidiSongs video
2. **little** - HeidiSongs video
3. **get** - HeidiSongs video

**Slide11BSightWordFlash** - Flash card review of all sight words

---

### **E. Savvas Reading Slides** (Slides 78-92)

#### **Author's Purpose Slides**

**Slide18AAuthorsPurpose** - Initial Teaching

```tsx
<SlideLayout title="Author's Purpose">
  <div className="flex gap-12">
    <div>
      <img src={entertainImage} alt="To Entertain" />
      <p>📚 To Entertain</p>
    </div>
    <div>
      <img src={informImage} alt="To Inform" />
      <p>📖 To Inform</p>
    </div>
  </div>
</SlideLayout>
```

**Images Used:**

- `figma:asset/7e4cea7dbf12c62700bce1b2137b5f36fbea5441.png` - Entertain
- `figma:asset/0e8d3dbcb6812fc35e7168744b2f4650a5ddef84.png` - Inform

---

#### **Vocabulary Slide**

**Slide18Vocabulary**

```tsx
<img
  src={vocabularyImage}
  className="max-w-full max-h-full object-contain"
/>
```

- **Image:** `figma:asset/0f6f56e82aea4412e4fd66ad49d91c9be009de3e.png`
- Displays key vocabulary words with pictures
- Pre-teaching strategy for comprehension

---

#### **Story Page Slides** (Slides 82-89)

Sequential story reading from Savvas curriculum.

**Pattern:**

```tsx
export function Slide12AStoryPage154() {
  return (
    <UFLISlideLayout>
      <img
        src={storyPage154}
        className="max-w-full max-h-full object-contain"
      />
    </UFLISlideLayout>
  );
}
```

**Pages Covered:**

- Page 154: Book cover
- Pages 154-161: Story sequence (8 pages total)

**Images:**

- `figma:asset/f7f02bb85adb231cf9b1bb7766f66d76bcc3ae48.png` - Book Cover
- `figma:asset/2d8f4ed093e952e1d533266613b6b58662ba7d66.png` - Page 154
- `figma:asset/682379b0fea473942d29b238b8f3578bfe8f4112.png` - Page 155
- ... (continues through page 161)

---

### **F. Discussion & Reflection Slides**

#### **Slide18A1TurnAndTalk**

```tsx
<SlideLayout
  title="Turn and Talk"
  subtitle="Discuss with your partner"
>
  <div className="text-5xl text-center">
    Why did the author write this story?
    <br />
    Was it to entertain us or inform us?
  </div>
</SlideLayout>
```

**Features:**

- Partner discussion prompt
- Critical thinking question
- Large, readable text

---

#### **Slide13Discussion**

```tsx
<SlideLayout title="Class Discussion">
  <ul>
    <li>What was your favorite part?</li>
    <li>What surprised you?</li>
    <li>What did you learn?</li>
  </ul>
</SlideLayout>
```

---

#### **Slide13ReflectionCheckoff**

```tsx
<SlideLayout title="Today I learned...">
  {reflectionItems.map((item) => (
    <div onClick={toggleCheck}>
      <CheckCircle />
      <p>{item}</p>
    </div>
  ))}
</SlideLayout>
```

**Features:**

- Interactive checkboxes
- Self-assessment
- Review of learning objectives

---

#### **Slide16Celebration**

```tsx
<SlideLayout
  type="welcome"
  title="🎉 Amazing Work, Readers! 🎉"
>
  <div className="text-6xl">You did it!</div>
  <div className="animated-confetti"></div>
</SlideLayout>
```

**Features:**

- Celebratory message
- Large emoji stars
- Positive reinforcement
- Wave animations

---

## 5. Images and Assets

### **A. Figma Asset Import System**

**Import Syntax:**

```tsx
import assetName from "figma:asset/[hash].png";
```

**Important Notes:**

- ⚠️ `figma:asset` is a VIRTUAL MODULE SCHEME, not a file path
- ✅ Correct: `import img from "figma:asset/abc123.png"`
- ❌ Wrong: `import img from "../imports/figma:asset/abc123.png"`
- No need for relative paths with figma:asset

---

### **B. Asset Catalog**

#### **Mascot & Characters**

| Asset               | Hash                                           | Usage         |
| ------------------- | ---------------------------------------------- | ------------- |
| Reading Bird Mascot | `3c5f456ff361271f7d99297678004fcd37902fc2.png` | Welcome slide |

---

#### **UFLI Lesson Images**

| Asset              | Hash                                           | Description            |
| ------------------ | ---------------------------------------------- | ---------------------- |
| UFLI Title         | `9a9e7e65002e7d9167d15d82f5555765c590d6c5.png` | Lesson 54 Day 1 title  |
| UFLI Schedule      | `d71bdbaf589ec1fc8b98cc9e3ad3a01be4532e6a.png` | Daily schedule display |
| Phonemic Awareness | `ec58be06b2a7811f662914d27cfaa63f7e2a288f.png` | Activity title slide   |
| Visual Drill       | `2f4f34c7a1fe08a3c2594134ca594a374691a7d4.png` | Visual drill title     |
| Auditory Drill     | `7cc6a55de5d1f9aeeaa656f076f624428557803d.png` | Auditory drill title   |
| Blending Drill     | `f8e0511fc9fbeeec073a5b860312e6c8a20b0335.png` | Blending drill title   |
| New Concept        | `1c57311682a536770c56d6861977708d4c14185d.png` | New concept intro      |

---

#### **Letter Cards (Visual Drill)**

| Letter | Hash                                           |
| ------ | ---------------------------------------------- |
| S      | `6ae6287afa559929b2dacc2b21f3d51d8973897d.png` |
| A      | `ac8caa811631e6f00a708cd684ff87c3d0dfb2de.png` |
| I      | `3a5e20e97c965654641522a75d79eec3231751ef.png` |
| O      | `a11e52688bc34ec0f9277164cfcdbce149707c11.png` |
| E      | `a7e4485c7dd89900f261d7270ca2a42753f7c766.png` |
| U      | `65aa811e01a6834a3163acf47a778e28185358ea.png` |
| N      | `219528cf05572c146c000b345a5b8f1be5a3debc.png` |
| M      | `64c3e3feefe4a84bcb18426c1d844abbcd275eaf.png` |
| T      | `d8103998397463912f26e483a7f97eeb46561761.png` |
| P      | `282e9bd0a693827d5aa3e08965d7dcc49383861a.png` |
| D      | `8228a1b7826417ade02a297c1a13ff592c2e4dc6.png` |
| X      | `abd3124f040c0af12c0ed248be8faf08b628ab03.png` |
| C      | `b23691480ae45ce52042bd59f641b93b8d0cd6c4.png` |
| G      | `15024f1f58b627d27d6ba70d9550dd65f7e82c11.png` |
| L      | `e1345214dd5e44f8ded1f07bb004f55324c6111f.png` |
| V      | `a2378e7520249f467d52cbf83f0e3e57cf8b9bb8.png` |

---

#### **Long A Pattern Images**

| Word/Concept    | Hash                                           | Description       |
| --------------- | ---------------------------------------------- | ----------------- |
| Short A Apple   | `05f46c0f2a2a28e80b238963992eb1a5433892e9.png` | Apple (short A)   |
| Long A Acorn    | `ee78aed28fc93977e29c53f9c0b16b48a4699a9a.png` | Acorn (long A)    |
| A_E Pattern     | `275e0f57de227666dd92a53934983e33cf3e46e4.png` | Pattern card      |
| made            | `e33049d3dcea4049dd0631dd09c7a9301026b687.png` | Word card         |
| tape            | `c4f381912aa51f7f5b772ffd8f9655ed6e5a3ec3.png` | Word card         |
| Pattern Words   | `d7582ca7be155b22977d308976fe464e8713399b.png` | Multiple words    |
| tap             | `2cf5c0ad3b46dddf791a5ee74193b93957aca66d.png` | Word card         |
| tape (E)        | `20975fb1bf6c429da886c5c6565a53feeb771bb1.png` | Word with E       |
| cap             | `e18d2ad37e920142a54cfacd2845fa68b08f4345.png` | Word card         |
| cape            | `36e3b98ced6bd63ca764d55998ec024ceb3d8d11.png` | Word card         |
| mad             | `ddf17b223813c6bde42ae737c7e1ca741d6d3e81.png` | Word card         |
| made            | `b59d1ab2f5c2850b2b87b12a1f2639ca73b0a724.png` | Word card         |
| Sound Card      | `dd0e9fb109116483b0dd22a0d5b546d4b5d25f54.png` | Articulatory card |
| Watch Me Read   | `bf7377207e747159e09a4c1e6f3ca25a4f47ca99.png` | Modeling slide    |
| Read Together   | `b0d223dadb632e63bb47a490f7b7cd6e1bd21c60.png` | Guided practice   |
| Read Together 2 | `a1e15549c73caf3696157136310f8b488dcc803f.png` | More practice     |
| Watch Me Spell  | `537eca6cd7d654e855fac6531665b739befdb244.png` | Spelling model    |
| Spell Together  | `26b7ad85b02e54a9dd513ef086045a52e31f002c.png` | Spelling practice |

---

#### **Savvas Reading Images**

| Element                      | Hash                                           | Description    |
| ---------------------------- | ---------------------------------------------- | -------------- |
| Vocabulary                   | `0f6f56e82aea4412e4fd66ad49d91c9be009de3e.png` | Key words      |
| Author's Purpose (Entertain) | `7e4cea7dbf12c62700bce1b2137b5f36fbea5441.png` | Entertain icon |
| Author's Purpose (Inform)    | `0e8d3dbcb6812fc35e7168744b2f4650a5ddef84.png` | Inform icon    |
| Book Cover                   | `f7f02bb85adb231cf9b1bb7766f66d76bcc3ae48.png` | Story cover    |
| Page 154                     | `2d8f4ed093e952e1d533266613b6b58662ba7d66.png` | Story page     |
| Page 155                     | `682379b0fea473942d29b238b8f3578bfe8f4112.png` | Story page     |
| Page 156                     | `80c13a16df25328c806972a1e0b448a20a5dec07.png` | Story page     |
| Page 157                     | `2bdc62296564795918ac604f9a6dcdc960104793.png` | Story page     |
| Page 158                     | `4c1c0c39d27d097a2216a0dbe6797ab1e0208645.png` | Story page     |
| Page 159                     | `74ea50aca8d5f05385416f53f357a7a048e25563.png` | Story page     |
| Page 160                     | `e7945a9a3792ecafcacd46b6ce2f47b79bd5bc60.png` | Story page     |
| Page 161                     | `79b7dad8084fa108d6acf8701809d44bc5ba9479.png` | Story page     |

---

#### **Schedule Progress Images**

| Checkpoint       | Hash                                           | Description    |
| ---------------- | ---------------------------------------------- | -------------- |
| Schedule Initial | `d71bdbaf589ec1fc8b98cc9e3ad3a01be4532e6a.png` | Day 1 schedule |
| After Phonemic   | `68b28d267359211125c3faeb3c139175c41c81d9.png` | 1st checkpoint |
| After Visual     | `6d4fe511f176c84eb5a8d77e8cd876158b2fbe6f.png` | 2nd checkpoint |
| After Auditory   | `86304c23da204e65ffbc87acd45bede7d61aa142.png` | 3rd checkpoint |
| After Blending   | `059a4077be06b2c94060030e3e2800f6fe99c271.png` | 4th checkpoint |
| Final Summary    | `0f732e25c80242df39eb2433a76e5d452f2f38b3.png` | All checked    |

---

## 6. Decorative Elements

### **Color Palette**

Defined in `/src/styles/theme.css`:

```css
:root {
  --soft-sand: #f5e6d3; /* Background */
  --sand: #f4e9da; /* Card backgrounds */
  --ocean-blue: #6fa8dc; /* Primary actions */
  --deep-navy: #1e3a5f; /* Text */
  --seafoam: #cfe8e5; /* Accents */
  --coral: #f4a7a1; /* Highlights */
  --coral-accent: #ff7f7f; /* Interactive states */
  --sunset: #fdbf76; /* Warm accents */
}
```

---

### **Typography**

```css
--font-header: "Quicksand", sans-serif; /* Friendly, rounded */
--font-body: "Open Sans", sans-serif; /* Clean, readable */
```

**Font Sizes:**

- Welcome titles: `text-7xl` (72px)
- Slide titles: `text-6xl` (60px)
- Content headings: `text-4xl` - `text-5xl`
- Body text: `text-2xl` - `text-3xl`
- Large display words: `text-[140px]` (formative checks)

---

### **Animations**

#### Built-in CSS Animations

```css
@keyframes wave {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25px);
  }
}

@keyframes wave-slow {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-15px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
```

---

### **Interactive Elements**

#### Hover Effects

```tsx
className = "hover:scale-105 transition-all duration-300";
```

- Used on clickable roadmap icons
- Applied to navigation buttons
- Enhances user feedback

#### Click Effects

```tsx
style={{
  backgroundColor: checked ? 'var(--ocean-blue)' : 'transparent',
  transition: 'all 0.3s ease'
}}
```

- Checkbox states
- Button pressed states
- Timer toggle states

---

## 🎯 Design Philosophy

### **Beach Theme Throughout**

- **Colors:** Ocean blues, soft sand, seafoam green, coral accents
- **Shapes:** Rounded corners, circular elements, flowing waves
- **Feel:** Calm, inviting, stress-free learning environment

### **Kindergarten-Appropriate**

- **Large text:** Easy to read from back of classroom
- **Clear icons:** Recognizable lucide-react symbols
- **Interactive elements:** Engaging without overwhelming
- **Positive reinforcement:** Thumbs up, checkmarks, celebration

### **Accessibility Features**

- **High contrast:** Deep navy text on soft sand backgrounds
- **Large touch targets:** 48px minimum for clickable areas
- **Keyboard navigation:** Full support for all functions
- **Screen reader friendly:** Semantic HTML structure
- **Visual feedback:** Hover states, active states, transitions

### **ESOL Student Support**

- **Visual scaffolding:** Pictures with every concept
- **Repetition:** Consistent slide structures
- **Clear instructions:** Large, simple language
- **Gesture cues:** Thumbs up/down for formative checks
- **Video support:** Embedded songs with closed captions available

---

## 📦 File Organization

```
/src/app/
├── components/
│   ├── SlideLayout.tsx              # Main slide wrapper
│   ├── UFLISlideLayout.tsx          # UFLI-specific wrapper
│   ├── SlideNavigation.tsx          # Bottom navigation bar
│   ├── TableOfContents.tsx          # Side menu with downloads
│   ├── Timer.tsx                    # Countdown timer
│   ├── ErrorBoundary.tsx            # Error handling
│   ├── DownloadProject.tsx          # README download
│   ├── DownloadSlidesAsImages.tsx   # ZIP export
│   │
│   └── slides/
│       ├── Slide01Welcome.tsx       # Welcome screen
│       ├── Slide02ICanStatements.tsx
│       ├── Slide03Roadmap.tsx
│       ├── RoadmapWrappers.tsx      # 5 roadmap variations
│       ├── VideoSlides.tsx          # 3 YouTube embeds
│       ├── Slide07AUFLITitle.tsx
│       ├── Slide07BUFLISchedule.tsx
│       ├── Slide07CUFLIPhonemic.tsx
│       ├── Slide09[A-Z]*.tsx        # UFLI content slides
│       ├── FormativeCheckSlides.tsx # 12 assessment slides
│       ├── Slide10A*.tsx            # Sight word slides
│       ├── Slide11B*.tsx            # Flash cards
│       ├── Slide12*.tsx             # Savvas story pages
│       ├── Slide13*.tsx             # Discussion/reflection
│       ├── Slide16Celebration.tsx   # Final celebration
│       ├── Slide18*.tsx             # Author's purpose
│       └── UFLISlideProps.ts        # TypeScript interfaces
│
└── App.tsx                          # Main app logic
```

---

## 🔧 Technical Implementation Notes

### **State Management**

```typescript
// App.tsx manages all slide state
const [currentSlide, setCurrentSlide] = useState(0);
const [timerSeconds, setTimerSeconds] = useState(0);
const [timerRunning, setTimerRunning] = useState(false);
const [timerSession, setTimerSession] = useState<number | null>(
  null,
);
```

### **Slide Array Structure**

```typescript
const slides = [
  { component: Slide01Welcome, title: "Welcome" },
  {
    component: Slide02ICanStatements,
    title: "Learning Targets",
  },
  // ... 93 more slides
];
```

### **Timer Auto-Start Logic**

```typescript
useEffect(() => {
  if (currentSlide === 10) {
    setTimerSeconds(2 * 60);
    setTimerSession(1);
    setTimerRunning(true);
  }
  // ... more timer sessions
}, [currentSlide, timerSession]);
```

### **Keyboard Event Handling**

```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      e.key === "ArrowRight" ||
      e.key === " " ||
      e.key === "PageDown"
    ) {
      setCurrentSlide(currentSlide + 1);
    }
    // ... more key handlers
  };
  window.addEventListener("keydown", handleKeyDown);
}, [currentSlide]);
```

### **Sound Effects**

```typescript
// Beep at 10 seconds countdown
if (newTime > 0 && newTime <= 10) {
  const beep = new Audio();
  beep.src = "data:audio/wav;base64,...";
  beep.play();
}

// Buzz when time's up
if (newTime === 0) {
  const buzz = new Audio();
  buzz.src = "data:audio/wav;base64,...";
  buzz.play();
}
```

---

## 📝 Usage Examples

### **Creating a New Welcome-Style Slide**

```tsx
import { SlideLayout } from "../SlideLayout";
import myImage from "figma:asset/[hash].png";

export function MyNewSlide() {
  return (
    <SlideLayout
      type="welcome"
      title="Hello!"
      subtitle="Welcome back!"
    >
      <div className="flex flex-col items-center">
        <img
          src={myImage}
          alt="My mascot"
          className="w-64 h-64"
        />
        <p
          className="text-4xl"
          style={{ color: "var(--ocean-blue)" }}
        >
          Let's learn together!
        </p>
      </div>
    </SlideLayout>
  );
}
```

### **Creating a UFLI Content Slide**

```tsx
import { UFLISlideLayout } from "../UFLISlideLayout";
import { UFLISlideProps } from "./UFLISlideProps";
import contentImage from "figma:asset/[hash].png";

export function MyUFLISlide({
  timerProps,
}: UFLISlideProps = {}) {
  return (
    <UFLISlideLayout timerProps={timerProps}>
      <img
        src={contentImage}
        alt="Teaching content"
        className="max-w-full max-h-full object-contain"
      />
    </UFLISlideLayout>
  );
}
```

### **Creating an Interactive Slide**

```tsx
import { useState } from "react";
import { SlideLayout } from "../SlideLayout";
import { Check } from "lucide-react";

export function MyInteractiveSlide() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SlideLayout title="Choose One">
      <div className="flex gap-8">
        {["Option A", "Option B", "Option C"].map(
          (option, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="p-8 rounded-2xl transition-all hover:scale-105"
              style={{
                backgroundColor:
                  selected === i
                    ? "var(--ocean-blue)"
                    : "white",
                color:
                  selected === i ? "white" : "var(--deep-navy)",
                border: "3px solid var(--ocean-blue)",
              }}
            >
              {selected === i && (
                <Check className="w-8 h-8 mb-2" />
              )}
              <p className="text-3xl">{option}</p>
            </button>
          ),
        )}
      </div>
    </SlideLayout>
  );
}
```

---

## 🎓 Curriculum Alignment

### **Science of Reading Standards**

- ✅ Explicit phonics instruction (UFLI Foundations)
- ✅ Systematic progression (visual → auditory → blending)
- ✅ Sight word automaticity practice
- ✅ Formative assessment embedded throughout
- ✅ Multiple exposures to concepts
- ✅ Decodable text practice

### **Kindergarten ELA Standards**

- ✅ Letter-sound correspondence
- ✅ Long vs. short vowel discrimination
- ✅ Silent E pattern recognition
- ✅ Sight word recognition
- ✅ Author's purpose comprehension
- ✅ Vocabulary development
- ✅ Story retelling and discussion

---

## 📚 Additional Resources

### **Component Libraries Used**

- **Lucide React** - Icons (`lucide-react@0.487.0`)
- **Motion** - Animations (`motion@12.23.24`)
- **Radix UI** - Accessible components
- **Tailwind CSS v4** - Utility-first styling

### **External Resources**

- **YouTube Videos** - Jack Hartmann, HeidiSongs
- **UFLI Foundations** - University of Florida Literacy Institute
- **Savvas Reading** - myView Literacy curriculum

---

## 🎉 Conclusion

This slide deck represents a **fully functional, curriculum-aligned, administrator-ready** kindergarten ELA lesson presentation system. Every component has been carefully designed with:

✨ **Kindergarten students** in mind - Large, engaging, interactive  
✨ **Teachers** in mind - Easy navigation, timers, clear structure  
✨ **Administrators** in mind - Professional appearance, standards-aligned  
✨ **ESOL students** in mind - Visual supports, scaffolding, repetition

---

**Total Slides:** 95  
**Total Lesson Time:** ~65 minutes  
**Components Created:** 40+  
**Images Used:** 60+  
**Keyboard Shortcuts:** 10  
**Interactive Elements:** 20+

---

**Created for:** Kindergarten ELA Instruction  
**Framework:** React 18 + TypeScript + Tailwind CSS v4  
**Curriculum:** UFLI Foundations Lesson 54 Day 1 + Savvas myView  
**Theme:** Calming Beach 🏖️  
**Status:** Production Ready ✅