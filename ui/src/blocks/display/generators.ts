export default function define(Python: Blockly.BlockGenerators) {


  Python['scroll'] = function (block) {
    let text_message = block.getFieldValue('message');
    let code = 'display.scroll("' + text_message + '") \n';
    return code;
  };

  Python['scrollvar'] = function (block) {
    let text_message = block.getFieldValue('message');
    let code = 'display.scroll(' + text_message + ') \n';
    return code;
  };

  Python['image'] = function (block) {
    let text_image = block.getFieldValue('image');
    let code = 'display.show(' + text_image + ') \n';
    return code;
  };

  Python['getpixel'] = function (block) {
    let text_xy = block.getFieldValue('xy');
    let code = 'display.get_pixel(' + text_xy + ') \n';
    return code;
  };

  Python['setpixel'] = function (block) {
    let text_setpix = block.getFieldValue('setpix');
    let code = 'display.set_pixel(' + text_setpix + ') \n';
    return code;
  };

  Python['radiosend'] = function (block) {
    let text_send = block.getFieldValue('send');
    let code = 'radio.send("' + text_send + '") \n';
    return code;
  };
  
  Python['disclear'] = function (block) {
    let code = 'display.clear() \n';
    return code;
  };

  Python['imradio'] = function (block) {
    let code = 'import radio \n';
    return code;
  };

  Python['radioon'] = function (block) {
    let code = 'radio.on()\n';
    return code;
  };
  

  Python['disonoff'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'display.' +dropdown_name+ '()\n';
  return code;
};

 
Python['imagecreate'] = function(block) {
  var text_image = block.getFieldValue('image');
  var number_1 = block.getFieldValue('1');
  var number_2 = block.getFieldValue('2');
  var number_3 = block.getFieldValue('3');
  var number_4 = block.getFieldValue('4');
  var number_5 = block.getFieldValue('5');
  var number_6 = block.getFieldValue('6');
  var number_7 = block.getFieldValue('7');
  var number_8 = block.getFieldValue('8');
  var number_9 = block.getFieldValue('9');
  var number_10 = block.getFieldValue('10');
  var number_11 = block.getFieldValue('11');
  var number_12 = block.getFieldValue('12');
  var number_13 = block.getFieldValue('13');
  var number_14 = block.getFieldValue('14');
  var number_15 = block.getFieldValue('15');
  var number_16 = block.getFieldValue('16');
  var number_17 = block.getFieldValue('17');
  var number_18 = block.getFieldValue('18');
  var number_19 = block.getFieldValue('19');
  var number_20 = block.getFieldValue('20');
  var number_16 = block.getFieldValue('16');
  var number_17 = block.getFieldValue('17');
  var number_18 = block.getFieldValue('18');
  var number_19 = block.getFieldValue('19');
  var number_20 = block.getFieldValue('20');
  // TODO: Assemble Python into code variable.
  var code = text_image +' = Image("'+number_1+number_2+number_3+number_4+number_5+':'+number_6+number_7+number_8+number_9+number_10+':'+number_11+number_12+number_13+number_14+number_15+':'+number_16+number_17+number_18+number_19+number_20+'")\n';
  return code;
};



}
