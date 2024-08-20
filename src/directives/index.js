import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive('lazy-img', {
            // el：指令绑定的元素
            // binding：绑定元素的值
            mounted(el, bingding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // 进入视口区域
                        if (isIntersecting) {
                            el.src = bingding.value
                            // 只需要监听一次就好
                            stop()
                        }
                    },
                )
            }
        })
    }

}