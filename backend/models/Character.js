const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 20
  },
  class: {
    type: String,
    required: true,
    enum: ['warrior', 'mage', 'warlock', 'priest', 'druid', 'paladin', 'rogue']
  },
  isRecommended: {
    type: Boolean,
    default: false
  },
  attributes: {
    strength: {
      type: Number,
      required: true,
      min: 0,
      max: 20
    },
    agility: {
      type: Number,
      required: true,
      min: 0,
      max: 20
    },
    stamina: {
      type: Number,
      required: true,
      min: 0,
      max: 20
    },
    intelligence: {
      type: Number,
      required: true,
      min: 0,
      max: 20
    },
    faith: {
      type: Number,
      required: true,
      min: 0,
      max: 20
    }
  },
  quizAnswers: {
    type: [Number],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 验证属性总和为 30
characterSchema.pre('save', async function() {
  const total = this.attributes.strength + 
                this.attributes.agility + 
                this.attributes.stamina + 
                this.attributes.intelligence + 
                this.attributes.faith;
  
  if (total !== 30) {
    throw new Error(`属性总和必须为30点，当前为${total}点`);
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;