var config = {
	entry: './todolist/main.js', // 指定打包的入口文件

	output: {           // 配置打包结果，path 定义了输出的文件夹，filename 定义打包结果文件的名称
		path: './todolist',
		filename: 'todolist.js'
	},

	devServer: {        // 设置服务器端口号为7777， 端口号可以自己设定
		inline: true,
		port: 7777
	},

	module: {           // 定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。
		//当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
		loaders: [{
			test:/\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',

			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}

module.exports = config;