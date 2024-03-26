import { Component, type ErrorInfo, type ReactNode } from 'react'
import Link from './Link'
import ActionText from './ActionText'

type Props = {
  children?: ReactNode
}

type State = {
  hasError: boolean
  error: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: new Error(''),
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo)
  }

  public render(): ReactNode | ReactNode[] {
    if (this.state.hasError) {
      return (
        <div className="w-2/4 h-dvh m-auto grid place-items-center">
          <div className="w-full my-auto flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-5xl font-black">
                Ooops... This shouldn&apos;t be happening...
              </h1>
              <h2 className="text-2xl font-regular text-regular text-opacity-60">
                Please,{' '}
                <ActionText
                  className="font-bold text-regular"
                  onClick={async () => {
                    if (this.state.error.stack) {
                      await navigator.clipboard.writeText(this.state.error.stack)
                    }
                  }}
                >
                  copy the stack trace
                </ActionText>
                , and report this error{' '}
                <Link
                  className="font-bold text-regular"
                  to="https://github.com/andrwui/the-font-app/issues"
                  icon
                  animated
                >
                  here
                </Link>
                {'. '}
                Then,{' '}
                <Link
                  className="font-bold text-regular"
                  to="/"
                  animated
                >
                  reload the page
                </Link>
                {'.'}
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <p>{this.state.error.stack}</p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
