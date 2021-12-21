/**
 * we check the structure of the data manually, so it's save to use `any`
 * as return type
 */
export default (daysShortArrayString: string, daysArrayString: string): any => {
  let daysShortArray;
  let daysArray;
  const errorMessageLength = 'lyne-datepicker-days error: attributes days and daysShort do not have the same length. Reference the documentation to see how you should format the data for this attribute.';
  const errorMessageArray = 'lyne-datepicker-days error: attributes days or daysShort have the wrong data format. Reference the documentation to see how you should format the data for this attribute.';

  // make sure that we can parse the data
  try {
    daysShortArray = JSON.parse(daysShortArrayString);
    daysArray = JSON.parse(daysArrayString);
  } catch (error) {
    console.warn(errorMessageArray);

    return false;
  }

  // make sure we get two array of days
  if (!Array.isArray(daysShortArray) && !Array.isArray(daysArray)) {
    console.warn(errorMessageArray);

    return false;
  }

  // make sure the days arrays have the same length
  if (daysShortArray.length !== daysArray.length) {
    console.warn(errorMessageLength);

    return false;
  }

  return {
    long: daysArray,
    short: daysShortArray
  };
};
