/**
 * Created by lucas lee on 2017/7/23.
 */
import { JSDOM } from 'jsdom'

// 模拟 browser 环境
global.document = new JSDOM('<!doctype html><html><body></body></html>').window.document
global.window = document.defaultView
global.navigator = global.window.navigator
