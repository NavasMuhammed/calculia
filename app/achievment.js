import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/detailsSlice";
import { images } from "./data";

const Achievement = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  const modalData = {
    number: [],
    count: [],
    direction: [],
    color: [],
  };
  const handlePress = () => {
    setActive(!active);
  };
  const [achivedTitle, setAchivedTitle] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {active && (
        <View
          style={{
            left: "8%",
            top: "20%",
            willChange: "transform",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,
            alignItems: "center",
            justifyContent: "center",
            width: 350,
            borderRadius: 20,
            backgroundColor: "#1E1F3B",
            position: "absolute",
            zIndex: 99,
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#000",
            shadowOpacity: 2,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          <TouchableOpacity style={styles.cross} onPress={() => handlePress()}>
            <Image source={require("./img/Cross.png")}></Image>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Achievements Unlocked</Text>
          
          <Text style={styles.achivedTitle}>{achivedTitle}</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressBarInner}></View>
            </View>
          </View>

          <Text style={styles.progresText}>Correct Answered 95/100</Text>
          <Text style={styles.Congrates}>CONGRATULATION</Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Achievements</Text>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.columnTitle}>NUMERIC</Text>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level1.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.numbers.level1.imgPath}
                style={styles.image}
              ></Image>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                }}
              >
                {images.numbers.level1.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level3.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.numbers.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level3.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level2.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.numbers.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level2.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level4.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.numbers.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level4.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.columnTitle}>COUNTING</Text>

          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.counts.level1.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.counts.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level1.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level3.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.counts.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level3.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level2.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.counts.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level2.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level4.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.counts.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level4.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.columnTitle}>DIRECTIONS</Text>

          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.directions.level1.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.directions.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level1.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level3.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.directions.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level3.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level2.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.directions.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                {images.numbers.level2.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level4.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.directions.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {images.numbers.level4.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.columnTitle}>COLORS</Text>

          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.colors.level1.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.colors.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {images.numbers.level1.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level3.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.colors.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {images.numbers.level3.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level2.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.colors.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {images.numbers.level2.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePress();
                setAchivedTitle(images.numbers.level4.title);
              }}
              style={styles.button}
            >
              <Image
                source={images.colors.level1.imgPath}
                style={styles.image}
              ></Image>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                {images.numbers.level4.startCount.map((i) => {
                  return <Image source={require("./img/star.png")}></Image>;
                })}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#141527",
  },
  titleContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    // backgroundColor: "#000",
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 32,
  },
  modal: {
    left: "8%",
    top: "20%",
    willChange: "transform",
    marginLeft: "auto",
    marginRight: "auto",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    borderRadius: 20,
    backgroundColor: "#1E1F3B",
    position: "absolute",
    zIndex: 100,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
  },
  cross: {
    padding: 15,
    position: "absolute",
    left: "86%",
    top: 0,
    // backgroundColor: "#ffff",
  },
  progressContainer: {
    top: 20,
    width: "100%",
    height: "10%",
    // padding:0
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#fff",
  },
  progresText: {
    color: "#646577",
    fontWeight: "900",
    paddingTop: 10,
    fontSize: 16,
  },
  progressBar: {
    width: "60%",
    height: "35%",
    backgroundColor: "#646577",
    borderRadius: 20,
  },
  progressBarInner: {
    width: "90%",
    height: "100%",
    backgroundColor: "#FC6746",
    borderRadius: 20,
  },
  achivedTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    paddingTop: 30,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },
  Congrates: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
    paddingTop: 40,
  },
  scroll: {
    width: "100%",
    // backgroundColor: "#fff",
    flexWrap: "wrap",
  },
  column: {
    height: "15%",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: -70,
  },
  columnTitle: {
    marginTop: 50,
    marginBottom: 10,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "900",
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    // width:150,
    height: 125,
    margin: 20,
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonTitle: {
    fontWeight: "900",
    color: "#fff",
    fontSize: 16,
  },
});
