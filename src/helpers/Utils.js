class Utils {
  static dataFilterFromDuplicates(prevData, newData) {
    let final = []
    const mapArr = [...prevData, ...newData]
    for (const i in mapArr) {
      final.push(JSON.stringify(mapArr[i]))
    }
    const sampleSet = new Set(final);
    const list = Array.from(sampleSet);
    final = [];
    list.forEach((element) => {
      JSON.parse(element);
      final.push(JSON.parse(element));
    });
    return final;
  }
}

export default Utils;
