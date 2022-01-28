import { Rate, Input, Checkbox, Button } from 'antd';
function Second(props) {
  const inputValue = '';
  const name = '千杯不醉兵马俑';
  const inputChange = (e) => {
    console.log(e.target.value, 'inputChange里的');
  };
  const addEvent = (e) => {
    console.log(e.target.value, 'Home组件里的addevent');
  };
  const update = () => {
    console.log('改名');
    name = 'hhh'
  };
  return (
    <div style={{ margin: '50px', padding: '20px', background: 'pink' }}>
      <h2 >{name}</h2>
      <Button onClick={update}>改个名字</Button>
      <Rate disabled defaultValue={5} style={{ marginBottom: '20px' }} />
      <Input
        placeholder="请输入要添加的便签"
        value={inputValue}
        style={{ marginBottom: '20px' }}
        onChange={inputChange}
        onPressEnter={addEvent} />
      {/* <Tags onRef={onRef} /> */}
      <Clear />
    </div>
  )
}

function Tags(props) {
  const options = [
    { label: '吃饭', value: '吃饭', done: false },
    { label: '睡觉', value: '睡觉', done: true },
    { label: '撸牌牌', value: '撸牌牌', done: false },
  ];
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  const addEvent = (newTag) => {
    console.log(newTag, 'Tags组件里面tags');
    props.options.push({ label: newTag, value: newTag, done: false });
  }
  return (
    <div>
      <Checkbox.Group
        key={options}
        options={options}
        defaultValue={['吃饭']}
        onChange={onChange} />
    </div>
  );
}

function Clear() {
  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <Checkbox>已完成/全部</Checkbox>
      <Button type="primary" size='small' style={{ background: 'orange', borderColor: 'orange' }}>清除已完成任务</Button>
      <h1>hhh</h1>
    </div>
  );
}

export default Second;