const clearCssComments: TFuncStr = (strAll, marker) => {
  let str = strAll;

  const m1 = marker as string;
  //                                                                            Marker m1
  //                                                                                |
  //                                                                               \/
  str = str.replace(/(\*\/)/g, ['$1', m1].join('')); // Find: */  Replace with:  */¬
  //                                                                                                        Marker m1
  //                                                                                                           |
  //                                                                                                          \/
  const regComment = RegExp(`\\/\\*[^${m1}]*\\*\\/${m1}`, 'g'); // Removes all instances of: /* anything..  */¬
  str = str.replace(regComment, '');
  str = str.replace(m1, ''); // if any remainders of marker.
  return str;
};

export default clearCssComments;
