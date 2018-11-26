import {   Burger, Sushi, Burger_Liked, Burger_Disliked, Sushi_Liked, Sushi_Disliked,
  Noodle, Noodle_Liked, Noodle_Disliked, Steak, Steak_Liked, Steak_Disliked  } from './Assets'

export const categories = [
  {
    'title': 'American',
    'img_neutral': Burger,
    'img_liked': Burger_Liked,
    'img_disliked': Burger_Disliked
  },
  {
    'title': 'Chinese',
    'img_neutral': Noodle,
    'img_liked': Noodle_Liked,
    'img_disliked': Noodle_Disliked
  },
  {
    'title': 'French',
    'img_neutral': Steak,
    'img_liked': Steak_Liked,
    'img_disliked': Steak_Disliked
  },
  {
    'title': 'Japanese',
    'img_neutral': Sushi,
    'img_liked': Sushi_Liked,
    'img_disliked': Sushi_Disliked
  }
]
