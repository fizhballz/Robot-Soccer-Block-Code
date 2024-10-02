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
    // Get the value of the 'ball_sensor_number' input field
    var ballSensorNumber = Blockly.Arduino.valueToCode(block, 'ball_sensor_number', Blockly.Arduino.ORDER_ATOMIC) || '1'; // Default to 1 if no sensor number is provided

    // Generate the Arduino code for calling the readBall function
    var code = 'readBall(' + ballSensorNumber + ')';
    
    // Return the complete Arduino code
    return [code, Blockly.Arduino.ORDER_NONE]; // Return as an expression (for using the function in other expressions)
};

Blockly.Arduino['readCompass'] = function(block) {
    // Generate the Arduino code for calling the readCompass function
    var code = 'readCompass()';

    // Return the complete Arduino code, returning it as part of an expression
    return [code, Blockly.Arduino.ORDER_ATOMIC]; // Return as an expression (since this block outputs a value)
};

Blockly.Arduino['readButton'] = function(block) {
    // Get the button number (1 or 2)
    var buttonNumber = Blockly.Arduino.valueToCode(block, 'button_number', Blockly.Arduino.ORDER_ATOMIC) || '1';

    // Generate the Arduino code for calling the readButton function
    var code = 'readButton(' + buttonNumber + ')';

    // Return the complete Arduino code, returning it as part of an expression
    return [code, Blockly.Arduino.ORDER_ATOMIC]; // Return as an expression (since this block outputs a value)
};

Blockly.Arduino['readLine'] = function(block) {
    // Get the line number (1, 2, or 3)
    var lineNumber = Blockly.Arduino.valueToCode(block, 'line_number', Blockly.Arduino.ORDER_ATOMIC) || '1';

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
    var code = 'motor(' + motorNum + ', ' + speed + ', ' + direction + ');\n';
    
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
