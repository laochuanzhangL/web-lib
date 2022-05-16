import React, { Component } from "react"
import {
  Table,
  Space,
  Popconfirm,
  Button,
  Modal,
  Form,
  Select,
  Input,
  Switch,
  Upload,
  message,
} from "antd"
import "./styles.less"
import { UploadOutlined } from "@ant-design/icons"
import httpUtil from "../../../../../utils/httpUtil"
const { Option } = Select
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}

export default class M_goods extends Component {
  state = {
    book: [],
    file: undefined,
    visible: false,
    columns: [
      {
        title: "图片",
        dataIndex: "picture",
        width: 100,
        render: (record) => {
          return (
            <div className='shelf_img_wrap'>
              <img src={record} style={{ height: "40px" }} />
            </div>
          )
        },
      },
      {
        title: "书名",
        dataIndex: "title",
        width: 200,
        render: (record) => {
          return `《${record}》`
        },
      },
      {
        title: "作者",
        dataIndex: "writer",
        width: 200,
      },
      {
        title: "单价/元",
        dataIndex: "price",
        width: 150,
      },
      {
        title: "是否热门",
        dataIndex: "popular",
        width: 200,
        render: (record) => (record == 1 ? "是" : "否"),
      },
      {
        title: "操作",
        dataIndex: "action",
        width: 200,
        render: (_, record) => (
          <Space size='middle'>
            <Popconfirm
              title='是否删除?'
              okText='确定'
              cancelText='取消'
              onConfirm={() => this.handleDelete(record)}
            >
              <a>删除</a>
            </Popconfirm>
          </Space>
        ),
      },
    ],
  }
  normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  beforeUpload = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      file.thumbUrl = e.target.result
    }
    this.setState({
      file: file,
    })
    return false
  }
  handleDelete = (e) => {
    const { Id } = e
    const formdata = {
      id: Id,
    }
    httpUtil.deletBook(formdata).then((res) => {
      message.info(res.data.message)
      if (res.data.isDelete) {
        this.loadbook()
      }
    })
  }
  handleAdd = () => {
    this.setState({
      visible: true,
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  onFinish = (e) => {
    const { title, price, writer, popular, sort, picture } = e
    const formdata = new FormData()
    formdata.append("file", this.state.file)
    formdata.append("title", title)
    formdata.append("price", price)
    formdata.append("writer", writer)
    formdata.append("popular", popular)
    formdata.append("sort", sort)
    httpUtil.addBook(formdata).then((res) => {
      message.info(res.data.message)
      if (res.data.isSuccess) {
        this.loadbook()
      }
      this.setState({
        visible: false,
      })
    })
  }
  componentDidMount() {
    this.loadbook()
  }
  loadbook = () => {
    httpUtil.getAllBooks().then((res) => {
      this.setState({
        book: res.data,
      })
    })
  }
  render() {
    const paginationProps = { defaultPageSize: 5 }

    const { columns, book, visible } = this.state
    return (
      <div className='goods_wrap'>
        <Table
          columns={columns}
          dataSource={book}
          pagination={paginationProps}
          footer={() => (
            <Button
              type='dashed'
              style={{ width: "100%", height: 50 }}
              onClick={this.handleAdd}
            >
              + 新增
            </Button>
          )}
        />
        <Modal
          title='添加书籍'
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            name='goods_form'
            id='goods_form'
            {...formItemLayout}
            onFinish={this.onFinish}
            initialValues={{
              rate: 3.5,
            }}
          >
            <Form.Item
              {...formItemLayout}
              name='title'
              label='书名'
              rules={[
                {
                  required: true,
                  message: "请输入书名",
                },
              ]}
            >
              <Input placeholder='请输入书名' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='writer'
              label='作者'
              rules={[
                {
                  required: true,
                  message: "请输入作者",
                },
              ]}
            >
              <Input placeholder='请输入作者' />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              name='price'
              label='单价'
              rules={[
                {
                  required: true,
                  message: "请输入单价",
                },
              ]}
            >
              <Input placeholder='请输入单价 （单位：元）' />
            </Form.Item>
            <Form.Item
              name='sort'
              label='类别'
              rules={[{ required: true, message: "请选择类别" }]}
            >
              <Select placeholder='请选择图书类别'>
                <Option value='社科类'>社科类</Option>
                <Option value='文化类'>文化类</Option>
                <Option value='文艺类'>文艺类</Option>
                <Option value='经管类'>经管类</Option>
                <Option value='科技类'>科技类</Option>
                <Option value='教育类'>教育类</Option>
                <Option value='少儿类'>少儿类</Option>
              </Select>
            </Form.Item>

            <Form.Item name='popular' label='是否热门' valuePropName='checked'>
              <Switch />
            </Form.Item>

            <Form.Item
              name='picture'
              label='图片'
              rules={[{ required: true, message: "请选择一张图片" }]}
              valuePropName='fileList'
              getValueFromEvent={this.normFile}
            >
              <Upload
                beforeUpload={this.beforeUpload}
                name='picture'
                listType='picture'
              >
                <Button icon={<UploadOutlined />}>选择一张图片</Button>
              </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
