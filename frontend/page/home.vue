<template>
	<div id="home">
		<!-- 左侧项目面板 -->
		<project-panel></project-panel>
		<!-- 请求面板 -->
		<div id="request-panel">
			<Input placeholder="输入请求 url" v-model="request.url" class="url-input">
				<Select v-model="request.type" style="width:80px" slot="prepend">
					<Option v-for="type in requestTypes" :value="type" :key="type">{{ type }}</Option>
				</Select>
				<span slot="append">
					<Button type="primary">发送</Button>
					<Button type="primary">保存</Button>
				</span>
			</Input>
			<Tabs value="headers" class="settings">
        <TabPane label="请求头部" name="headers">
        	<Row :gutter="5" v-for="header,i in request.setting.headers" :key="i" class="header">
        		<Col span="4"><Input placeholder="头部名称" class="header-key" v-model="header.key"></Input></Col>
        		<Col span="19"><Input placeholder="头部值" class="header-value" v-model="header.value" @on-enter="addHeader"></Input></Col>
        		<Col span="1" class="close"><Icon type="close" size="16" @click.native="delHeader(i)"/></Col>
        	</Row>
        </TabPane>
        <TabPane label="请求体" name="body">
        	<Row :gutter="5" v-for="bodyItem,i in request.setting.body" :key="i" class="body-item">
        		<Col span="4"><Input placeholder="名称" class="body-item-key" v-model="bodyItem.key"></Input></Col>
        		<Col span="19"><Input placeholder="值" class="body-item-value" v-model="bodyItem.value" @on-enter="addBodyItem"></Input></Col>
        		<Col span="1" class="close"><Icon type="close" size="16" @click.native="delBodyItem(i)"/></Col>
        	</Row>
        </TabPane>
        <!-- raw data -->
        <TabPane label="raw data" name="raw-data" class="raw-data">
        	<textarea name="raw-data" id="" cols="30" rows="10" placeholder="输入你的请求数据"></textarea>
        </TabPane>
	    </Tabs>
		</div>
		<!-- 请求面板 -->
		<div id="response-panel">
			请求面板
		</div>
	</div>
</template>

<script>
	import projectPanel from './project-panel.vue';
	export default {
		name: 'home',
		components: {
			projectPanel,
		},
		data (){
			return {
				requestTypes: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS',],
				request: {
					type: 'GET',
					url: '',
					setting: {
						headers: [
							{
								key: '',
								value: '',
							},
						],
						body: [
							{
								key: '',
								value: '',
							},
						],
					}
				}
			};
		},
		methods: {
			addHeader (){
				this.request.setting.headers.push({
					key: '',
					value: ''
				});
			},
			delHeader (index){
				if(index !== 0){
					this.request.setting.headers.splice(index, 1);
				}
			},
			addBodyItem (){
				this.request.setting.body.push({
					key: '',
					value: ''
				});
			},
			delBodyItem (index){
				if(index !== 0){
					this.request.setting.body.splice(index, 1);
				}
			},
		}
	};
</script>

<style lang= "less">
	#home {
		height: 100%;
		padding: 0 5px 0 360px;
		#request-panel, #response-panel {
			/*box-shadow: 0 2px 5px rgba(0,0,0,.25);*/
			border: 1px solid #dfdfdf;
			text-align: center;
			margin-top: 10px;
			color: #ffffff;
			padding: 10px;
		}
		#request-panel {
			min-height: 300px;
			/*background-image: linear-gradient(-50deg,#ebad0b 0,#38b8b1 68%,#3192a5 100%);*/
			.url-input {
				width: 100%;
			}
			.settings {
				margin-top: 10px;
				.header, .body-item {
					margin-bottom: 8px;
					.close {
						line-height: 32px;
						cursor: pointer;
					}
				}
				.raw-data {
					textarea {
						width: 100%;
						border: 1px solid #dfdfdf;
						padding: 5px;
						resize: none;
					}
				}
			}
		}
		#response-panel {
			height: calc(~"100% - 320px");
			/*background-image: linear-gradient(-50deg,#ebad0b 0,#38b8b1 68%,#3192a5 100%);*/
		}
	}
</style>