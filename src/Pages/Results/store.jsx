import { Burger, Sushi, Noodle, Steak } from '../Selection/Assets'

export const restaurants = [
  {
    'title': 'Buntastic Buns',
    'description': "Don't Worry, Beef Happy!",
    'category': 'American',
    'address': 'Indiana',
    'cost': 4,
    'rating': 5,
    'img': Burger,
    'items': {
      'Classic': 'No frills.',
      'Cheesy': 'For cheese lovers?',
      'Animal-Style': 'I can respect minimalism.',
    }
  },
  {
    'title': 'Make It Tso',
    'description': 'Our food is tso good!',
    'category': 'Chinese',
    'address': 'Shenzhen',
    'cost': 2,
    'rating': 0.5,
    'img': Noodle,
    'items': {
      'Plain': 'Really? Plain noodles?',
      'Raw': 'Are you really sure you want this?',
      'Pho': 'Wait, I thought this place serves orange chicken.',
    }
  },
  {
    'title': 'Miso Happy',
    'description': "お腹が空いています",
    'category': 'Japanese',
    'address': 'Hiroshima',
    'cost': 3,
    'rating': 3,
    'img': Sushi,
    'items': {
      'Tamago': "Can't go wrong with this one.",
      'Salmon roll': 'A roll containing salmon.',
      'Miso soup': 'An essential.',
    }
  },
  {
    'title': 'Oui Love Baguettes',
    'description': "Ooh La La!~",
    'category': 'French',
    'address': 'Paris',
    'cost': 1,
    'rating': 4,
    'img': Steak,
    'items': {
      'Steak': 'A slab of well-done meat.',
      'Brisket': 'A thinner slab of raw meat.',
      'Load of bread': "If you aren't in the mood for meat.",
    }
  },
]
