const PHONE_MASK = "+7 (xxx) xxx-xx-xx";

class PhoneFormater {
  static getPhoneNumbers(value) {
    return value.replace(/\D/g, "");
  }

  static setPhoneNumber(value) {
    let numbers = PhoneFormater.getPhoneNumbers(value).split("");

    if (numbers[0] === "7") {
      numbers.shift();
    }

    let numberIndex = 0;

    const formatPhoneNumber = PHONE_MASK.split("")
      .map((char, index) => {
        if (index < 4) {
          return char;
        }

        if (numberIndex >= numbers.length) {
          return "";
        }

        if (["-", "(", ")", " "].includes(char)) {
          return char;
        }

        return numbers[numberIndex++];
      })
      .join("");

    return formatPhoneNumber;
  }
}

export default PhoneFormater;
