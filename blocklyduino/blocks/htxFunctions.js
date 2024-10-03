'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

// Blockly.Blocks['goalangle'] = {
//     init: function() {
//         this.appendDummyInput()
//             .setAlign(Blockly.ALIGN_LEFT)
//             .appendField("Set goal angle")
//             .appendField("angle:")
//             .appendField(new Blockly.FieldNumber(0, -180, 180), 'goal_angle');
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(235);
//         this.setStyle('goalangle_blocks');
//         this.setTooltip("Sets the goal angle");
//         this.setHelpUrl("");
//     }
// };

Blockly.Blocks['readBall'] = {
    init: function() {
        this.appendDummyInput('NUMBER')
        .appendField('ball sensor number')
        .appendField(new Blockly.FieldNumber(1, 1, 8), 'ballSensor_number'); // Number input restricted to 1-8
        this.setOutput(true, null);
        this.setTooltip('Reads the value from the specified ball sensor (1-8)');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['readCompass'] = {
    init: function() {
        this.appendDummyInput('')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Compass Reading');
        this.setOutput(true, 'Number'); // Outputs a number (double)
        this.setTooltip('Reads the compass heading if calibrated');
        this.setHelpUrl('');
    }
};  

Blockly.Blocks['readButton'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Read Button")
            .appendField(new Blockly.FieldNumber(1, 1, 2), 'button_number'); // Number input limited to 1 or 2
        this.setOutput(true, 'Number'); // Outputs a number (int)
        this.setTooltip('Reads the state of the specified button (1 or 2)');
        this.setHelpUrl('');
    }
};


Blockly.Blocks['readLine'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Read Line Sensor")
            .appendField(new Blockly.FieldNumber(1, 1, 3), 'line_number'); // Number input limited to 1, 2, or 3
        this.setOutput(true, 'Number'); // Outputs a number (int/analog value)
        this.setTooltip('Reads the value from the specified line sensor (1, 2, or 3)');
        this.setHelpUrl('');
    }
};

//functions
Blockly.Blocks['motor'] = {
    init: function() {
        this.appendDummyInput('')
        .appendField(new Blockly.FieldDropdown([
            ['motor 1', 'motor1'],
            ['motor 2', 'motor2'],
            ['motor 3', 'motor3']
        ]), 'motor_num')
        .appendField(new Blockly.FieldLabelSerializable('speed'), 'motor_speed')
        .appendField(new Blockly.FieldNumber(0, 0), 'speed')
        .appendField(new Blockly.FieldLabelSerializable('direction'), 'motor_dir')
        .appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), 'degree');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


Blockly.Blocks ['void_loop'] = {
    init: function() {
        this.appendStatementInput('l')
        .appendField('run forever');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['void_setup'] = {
    init: function() {
        this.appendStatementInput('l')
        .appendField('run once');
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

                      
