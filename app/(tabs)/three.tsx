import Component7 from "@/components/core/component7/Component7";
import { SafeAreaView, StyleSheet } from "react-native";

export const TabThreeScreen: React.FC = () => {
    return(
        <SafeAreaView style={[styles.container, {paddingTop: 30}]}>
          <Component7 />
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: 15
    },
  });
  
  export default TabThreeScreen;
  