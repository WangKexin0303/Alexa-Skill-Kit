/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.3ddb4817-76f2-4b50-86d2-4271b66e7ac5';

// const SKILL_NAME = 'game is fun';
const WELCOME_MESSAGE = 'Hi! Welcome to Xperience@Tirple e. What do you want to know? Say give me a hint if you need my help';
const WELCOME_REPROMPT = 'Give me a hint';
const FIRST_MESSAGE = 'Move the letters two positions forward according to the alphabetical order';
const GET_FACT_MESSAGE = "Here's your hint: ";
const HELP_MESSAGE = 'You can say tell me a hint, or, you can say goodbye... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const handlers = {
    'LaunchRequest': function () {
        // this.emit('GetNewFactsIntent');
        this.response.speak(WELCOME_MESSAGE).listen(WELCOME_REPROMPT);
        this.emit(':responseReady');
    },
    'GetNewFactsIntent': function () {

        this.response.speak(GET_FACT_MESSAGE+FIRST_MESSAGE).listen();
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
