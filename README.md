## Mobile Flashcards

Final assessment project of the [Udacity](https://www.udacity.com/) Native React course,  where the goal was to build an App with the knowledge acquired during the course.

### Getting Started

To run this project locally, clone this repository and run the following commands in this directory:
- `npm install`
- `npm start`
  - You must have an `Android/iOS simulator` set up on your computer or use `expo app`
  
### The application

This app consists of: Create decks, cards and play quizzes, at the end of each game you will have a score that shows how many questions you hit, also, if you haven't played a game during the day, a notification will be posted.

This app was created with create-react-app, redux was used for state management, and React Native AsyncStorage for persistence. A random ID is generated for each deck and the data structure of a deck is basically:

```
random_id: {
	id: random_id,
	title: deck_name,
	cards: [
		{
		  question: string_question,
		  answer: string_answer
		}
      	]
    }
```

### Platforms

| Platform | Tested | Notes | 
|:---------|:-------|:------|
| iOS | :x: | - | 
| Android | :white_check_mark: | Tested with expo app | 
