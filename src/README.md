# Random Photo Generator — React Application Design

## 1. Application Overview

**Application Name:** Random Photo Generator

Is application ka purpose Unsplash API ka use karke randomly selected category ke basis par ek photo fetch karna aur UI par display karna hai.

User **Generate Photo** button par click karega.

Application:

1. Categories mein se randomly ek category select karegi.
2. Selected category ko Unsplash API ki query mein bhejegi.
3. API se photo receive karegi.
4. Received photo ko UI par display karegi.

### Example

Categories:

`nature`, `animal`, `food`, `shopping`

Agar random selection se `nature` select hua:

**Generate Photo → nature → Unsplash API → Photo → UI**

---

# 2. API

Application ke liye **Unsplash API** use hogi.

API ka purpose photos ko search/fetch karna hai.

Application ko API request ke liye relevant parameters/query ki zarurat hogi.

### Query Example

Agar random category:

`animal`

select hoti hai, to API request mein:

`query = animal`

bheja jayega.

Similarly:

* `nature`
* `food`
* `shopping`

etc. query ke roop mein bheje ja sakte hain.

> API key ko frontend code/document mein expose nahi karna chahiye. Production application mein API credentials ko secure rakhne ke liye appropriate backend/proxy approach consider karni chahiye.

---

# 3. Application Components

Application ko following components mein divide kiya ja sakta hai:

```text
App
│
├── Header
│
├── PhotoGenerator
│   └── GenerateButton
│
└── PhotoDisplay
```

## Component Responsibilities

### 3.1 App

`App` main/parent component hoga.

Responsibilities:

* Application ke major components ko manage karna.
* Shared state ko hold karna.
* Child components ko required data/handlers provide karna.

---

### 3.2 Header

Header mein application ka title hoga.

Example:

**Random Photo Generator**

Is component ko kisi major application state ki zarurat nahi hai.

---

### 3.3 PhotoGenerator

Ye component photo generate karne se related UI handle karega.

Responsibilities:

* Generate Photo button display karna.
* Generate action trigger karna.
* Parent se required function receive karna.

---

### 3.4 GenerateButton

Button user interaction handle karega.

User jab button click karega:

```text
Generate Photo
       ↓
Generate handler
       ↓
Random category select
       ↓
API request
```

Agar `GenerateButton` ko separate component banana unnecessary lage, to ise `PhotoGenerator` ke andar bhi rakha ja sakta hai.

---

### 3.5 PhotoDisplay

Ye component API se received photo ko UI par show karega.

Responsibilities:

* Photo display karna.
* Loading state ke according loading UI dikhana.
* Error state hone par error message dikhana.

---

# 4. State Variables

Application mein possible state variables:

| State              | Purpose                                     |
| ------------------ | ------------------------------------------- |
| `photo`            | API se received photo ko store karega       |
| `loading`          | API request chal rahi hai ya nahi           |
| `error`            | API request fail hone par error information |
| `selectedCategory` | Current selected/random category            |

### Categories

Categories ko state banana zaroori nahi hai agar woh fixed hain.

Example:

```text
categories = [
  "nature",
  "animal",
  "food",
  "shopping"
]
```

Ye ek constant ho sakta hai.

---

# 5. State Ownership

Shared state ko `App` component mein rakhna best approach hai kyunki multiple child components ko us data ki zarurat ho sakti hai.

### Proposed State Structure

```text
App
│
├── photo
├── loading
├── error
└── selectedCategory
```

`App` parent component hoga.

Child components ko required data aur functions props ke through diye ja sakte hain.

---

# 6. State Management Flow

```text
                    App
                     │
          ┌──────────┼──────────┐
          │          │          │
        photo      loading     error
          │
          │
   ┌──────┴─────────┐
   │                │
PhotoGenerator   PhotoDisplay
   │                │
Generate Button    Photo
```

Generate button click hone par parent ka generate handler execute hoga.

Parent:

1. Random category select karega.
2. API request karega.
3. Loading state update karega.
4. API response receive karega.
5. Photo state update karega.
6. PhotoDisplay updated photo ko render karega.

---

# 7. Random Category Logic

Application mein predefined categories ka collection hoga.

Example:

```text
nature
animal
food
shopping
```

Generate button click hone par collection ke kisi random index ko select kiya jayega.

### Example Flow

```text
Categories
    ↓
["nature", "animal", "food", "shopping"]
    ↓
Random index
    ↓
"animal"
    ↓
API query = "animal"
```

Isse har Generate Photo click par different category select hone ka possibility rahega.

---

# 8. Complete Data Flow

```text
User
  │
  │ Click Generate Photo
  ↓
GenerateButton
  │
  ↓
Generate Handler
  │
  ↓
Random Category Selection
  │
  ↓
Selected Category
  │
  ↓
Unsplash API Request
  │
  ↓
API Response
  │
  ├───────────────┐
  ↓               ↓
Success          Error
  │               │
  ↓               ↓
photo state      error state
update           update
  │               │
  ↓               ↓
PhotoDisplay     Error UI
  │
  ↓
Photo shown on UI
```

---

# 9. Loading State

API request complete hone mein time lag sakta hai.

Isliye `loading` state maintain karna useful hoga.

Flow:

```text
Generate clicked
       ↓
loading = true
       ↓
API request
       ↓
Response received
       ↓
loading = false
```

Loading ke time UI par:

**Loading...**

dikhaya ja sakta hai.

---

# 10. Error State

API request fail ho sakti hai.

Possible reasons:

* Network problem
* Invalid API request
* API limit
* Invalid credentials
* Server/API error

Isliye `error` state maintain karna useful hai.

Flow:

```text
API Request
     ↓
   Failed
     ↓
error state update
     ↓
Error message UI
```

---

# 11. State Placement Decision

| State/Data         | Where?         | Reason                                                                         |
| ------------------ | -------------- | ------------------------------------------------------------------------------ |
| `photo`            | App            | PhotoDisplay ko data chahiye aur API flow parent se control hoga               |
| `loading`          | App            | Generate action aur PhotoDisplay dono ke behavior ko affect kar sakta hai      |
| `error`            | App            | API request ka result UI ke different parts ko affect kar sakta hai            |
| `selectedCategory` | App            | API request ke flow ka part hai aur future mein UI ko bhi dikhaya ja sakta hai |
| Categories list    | Constant       | Fixed data hai, frequently change nahi hota                                    |
| Button UI state    | GenerateButton | Agar sirf button-specific temporary state ho to local state ho sakta hai       |

---

# 12. Why State in Parent?

Agar `photo` state sirf `PhotoDisplay` mein rakhi jaaye, to `GenerateButton`/generator ke API flow ke saath state coordination difficult ho sakti hai.

Isliye shared application state ko common parent:

**App**

mein rakhna better hai.

Is concept ko **lifting state up** kaha jata hai.

Parent state ko child components ko props ke through provide kar sakta hai.

---

# 13. Final Component Structure

Recommended initial structure:

```text
App
│
├── Header
│
├── PhotoGenerator
│   └── GenerateButton
│
└── PhotoDisplay
```

### State

```text
App
├── photo
├── loading
├── error
└── selectedCategory
```

### Static Data

```text
categories
├── nature
├── animal
├── food
└── shopping
```

---

# 14. Final Architecture Summary

Application ka main responsibility `App` ke paas rahega.

**Header**
→ Sirf application heading/title.

**PhotoGenerator**
→ Photo generate karne ka interaction.

**GenerateButton**
→ User click handle karega.

**PhotoDisplay**
→ API se received photo ko display karega.

**App**
→ Shared state aur main data flow manage karega.

Overall flow:

```text
Generate Button
      ↓
Random Category
      ↓
Unsplash API
      ↓
API Response
      ↓
Update State
      ↓
PhotoDisplay
      ↓
Photo on UI
```

## Main React Concepts Used

* Components
* Props
* State
* State ownership
* Lifting state up
* Parent-child communication
* Conditional rendering
* API data flow
* Loading state
* Error state

**Important:** Is stage par implementation/code nahi karna hai. Pehle application ka architecture aur state-management design clear karna hai.
