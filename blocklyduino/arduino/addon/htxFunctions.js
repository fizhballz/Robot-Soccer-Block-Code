/**
 * @fileoverview Generating Arduino code for htxFunctions blocks.
 */

'use strict';

goog.require('Blockly.Arduino');

// Blockly.Arduino['goalangle'] = function(block) {
//     // Get the value of the 'goal_angle' input field
//     var angleValue = Blockly.Arduino.valueToCode(block, 'goal_angle', Blockly.Arduino.ORDER_NONE) || '0'; // Default to 0 if no angle is provided

//     // Generate the Arduino code to set the goal angle
//     var code = 'setGoalAngle(' + angleValue + ');\n';

//     // Return the complete Arduino code with the appropriate formatting
//     return code;
// };

Blockly.Arduino['readBall'] = function(block) {
    var ballSensor_number = block.getFieldValue('ballSensor_number');
    var code = 'readBall(' + ballSensor_number + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
  
Blockly.Arduino['readCompass'] = function(block) {
    // Generate the Arduino code for calling the readCompass function
    var code = 'readCompass()';

    // Return the complete Arduino code, returning it as part of an expression
    return [code, Blockly.Arduino.ORDER_ATOMIC]; // Return as an expression (since this block outputs a value)
};

Blockly.Arduino['readButton'] = function(block) {
    // Get the button number directly from the field (not using valueToCode)
    var buttonNumber = block.getFieldValue('button_number') || '1';

    // Generate the Arduino code for calling the readButton function
    var code = 'readButton(' + buttonNumber + ')';

    // Return the complete Arduino code, returning it as part of an expression
    return [code, Blockly.Arduino.ORDER_ATOMIC]; // Return as an expression (since this block outputs a value)
};

Blockly.Arduino['readLine'] = function(block) {
    // Get the line number (1, 2, or 3)
    var lineNumber = block.getFieldValue('line_number') || '1';

    // Generate the Arduino code for calling the readLine function
    var code = 'readLine(' + lineNumber + ')';

    // Return the complete Arduino code, returning it as part of an expression
    return [code, Blockly.Arduino.ORDER_ATOMIC]; // Return as an expression (since this block outputs a value)
};

Blockly.Arduino['motor'] = function(block) {
    // Get the selected motor number (1, 2, or 3)
    var motorNum = block.getFieldValue('motor_num').replace('motor', ''); // 'motor1' -> '1'
    
    // Get the speed and direction from the block inputs
    var speed = block.getFieldValue('speed') || '0'; // Default speed is 0
    var direction = block.getFieldValue('degree') || '0'; // Direction can be 0 or 1

    // Generate the Arduino code
    var code = 'motor' + motorNum + '(' + speed + ', ' + direction + ');\n';
    
    // Return the code for motor control
    return code;
};
Blockly.Arduino['loop'] = function(block) {
    var loopCode = Blockly.Arduino.statementToCode(block, 'LOOP_CODE');
    
    // Generate the Arduino loop() function
    var code = 'void loop() {\n' + loopCode + '}\n';
    return code;
};

Blockly.Arduino['setup'] = function(block) {
    var setupCode = Blockly.Arduino.statementToCode(block, 'SETUP_CODE');
    
    // Generate the Arduino setup() function
    var code = 'void setup() {\n' + setupCode + '}\n';
    return code;
};
