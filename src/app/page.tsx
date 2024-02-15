"use client";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { user, isLoaded } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoaded && user ? (
        <div className="px-8 py-2">
          <dt className="text-sm font-semibold mb-1">Email addresses</dt>
          <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
            {user.emailAddresses.map(email => (
              <div key={email.id} className="flex gap-2 mb-1">
                {email.emailAddress}
                {user.primaryEmailAddressId === email.id && (
                  <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </dd>
        </div>
      ) : (
        <div className="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          Loading user data...
        </div>
      )}
    </main>
  );
};

export default Home;
