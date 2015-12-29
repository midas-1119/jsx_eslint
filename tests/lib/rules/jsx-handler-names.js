/**
 * @fileoverview Tests for jsx-handler-names
 * @author Jake Marsh
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/jsx-handler-names');
var RuleTester = require('eslint').RuleTester;

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('jsx-handler-names', rule, {
  valid: [{
    code: [
      '<TestComponent onChange={this.handleChange} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent onChange={this.props.onChange} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent onChange={this.props.onFoo} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent isSelected={this.props.isSelected} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent shouldDisplay={this.state.shouldDisplay} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent shouldDisplay={arr[0].prop} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent onChange={props.onChange} />'
    ].join('\n'),
    parserOptions: parserOptions
  }, {
    code: [
      '<TestComponent ref={this.handleRef} />'
    ].join('\n'),
    parserOptions: parserOptions
  }],

  invalid: [{
    code: [
      '<TestComponent onChange={this.doSomethingOnChange} />'
    ].join('\n'),
    parserOptions: parserOptions,
    errors: [{message: 'Handler function for onChange prop key must begin with \'handle\''}]
  }, {
    code: [
      '<TestComponent handleChange={this.handleChange} />'
    ].join('\n'),
    parserOptions: parserOptions,
    errors: [{message: 'Prop key for handleChange must begin with \'on\''}]
  }, {
    code: [
      '<TestComponent onChange={this.onChange} />'
    ].join('\n'),
    parserOptions: parserOptions,
    errors: [{message: 'Handler function for onChange prop key must begin with \'handle\''}]
  }]
});
