import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/* Tasks for the Day*/}
      <View style={styles.tasksWrapper}>


        <Text style={styles.sectionTitle}>Take Care of These Things:</Text>

        <View style={styles.items}>
          {/* Where tasks go to die*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
              
            })
          }

        </View>

      </View>

      {/*Write a Task Section*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper} 
      > 
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()} >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
          
       </KeyboardAvoidingView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9D47E'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#2A8B03',
    borderRadius: 60,
    borderColor: '#000000',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#2A8B03',
    borderRadius: 60,
    borderColor: '#000000',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {},
  

});
