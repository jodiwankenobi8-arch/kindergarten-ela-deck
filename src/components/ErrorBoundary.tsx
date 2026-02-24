import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Slide error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center h-full w-full bg-soft-sand">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg">
              <h2 className="text-2xl font-bold text-deep-navy mb-4">
                Oops! Something went wrong with this slide
              </h2>
              <p className="text-gray-600 mb-6">
                Please use the navigation arrows to continue with the lesson.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-2 bg-ocean-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Try Again
              </button>
              {this.state.error && (
                <details className="mt-4 text-left text-sm text-gray-500">
                  <summary className="cursor-pointer">Technical Details</summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
