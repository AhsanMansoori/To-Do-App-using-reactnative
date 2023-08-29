import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enterTodoText, setenterTodoText] = useState('');
  const [ToDoList, setToDoList] = useState([]);

  function Enter_ToDo_Text(enterText){
    setenterTodoText(enterText);
  }

  function Add_ToDo_Text(){
    if(enterTodoText != "") {
      setToDoList([...ToDoList, enterTodoText]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexforTodo}>
        <TextInput style={styles.TextInputforTodo} placeholder='Add your To-do' onChangeText={Enter_ToDo_Text}/>
        <Button title='Add To-do' onPress={Add_ToDo_Text}/>
      </View>
      {/* // List of all tags// */}
      <ScrollView>
        {ToDoList.map((todo) => <Text style={styles.todo} key={todo}>{todo}</Text>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  flexforTodo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
    marginBottom: 20

  },
  TextInputforTodo: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "75%",
    padding: 5
  },
  todo: {
    borderWidth: 1,
    borderColor: "#cccccc",
    marginVertical: 5,
    padding: 10,
    textAlign: "center",
    fontSize: 24
  }
});
