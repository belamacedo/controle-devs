import { VariantProps, cva } from "class-variance-authority";

export type ContainerProps = VariantProps<typeof container>

export const container = cva(["flex items-center"], {
    variants: {
        type: {
            small: 'text-small',
            large: 'text-large'
        }
    }
})

export const switchRoot = cva("w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default")