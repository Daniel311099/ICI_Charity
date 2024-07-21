"use client";
import React, { useMemo, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import "~/styles/donate.css";
import { api } from "~/trpc/react";
import { useTestTrpc } from "./hooks";

const currencies = [
    { code: "GBP", label: "British Pound" },
    { code: "USD", label: "US Dollar" },
    { code: "EUR", label: "Euro" },
];

const donationAmounts = [5, 10, 15];

export const DonateForm: React.FC = () => {
    const { data: session } = useSession();
    const [selectedAmount, setSelectedAmount] = useState<string>("");
    const [customAmount, setCustomAmount] = useState<string>("");
    const [selectedFrequency, setSelectedFrequency] =
        useState<string>("monthly");
    const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
    const [currency, setCurrency] = useState<string>("GBP");
    const [message, setMessage] = useState<string>("");

    const frequencies = useMemo(() => {
        if (isAnonymous) {
            return [
                {
                    freq: "monthly",
                    checked: false,
                },
                {
                    freq: "yearly",
                    checked: false,
                },
                {
                    freq: "onetime",
                    checked: true,
                },
            ];
        } else {
            return ["monthly", "yearly", "onetime"].map((freq) => {
                return {
                    freq,
                    checked: freq === selectedFrequency,
                };
            });
        }
    }, [selectedFrequency, isAnonymous]);

    const handleAmountChange = (value: string) => {
        setSelectedAmount(value);
        setCustomAmount("");
    };

    const handleFrequencyChange = (value: string) => {
        setSelectedFrequency(value);
    };

    const handleAnonymousChange = () => {
        setIsAnonymous(!isAnonymous);
        if (isAnonymous) {
            setSelectedFrequency((e) => "onetime");
        }
    };

    const handleCustomAmountChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value;
        console.log({ value });
        const valid = /^[0-9]+(\.[0-9]{0,2})?$/.test(value) || "";
        if (valid || !value) {
            setSelectedAmount("");
            setCustomAmount(value);
        }
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    // useTestTrpc();
    const getCurrencySymbol = () => {
        switch (currency) {
            case "USD":
                return "$";
            case "EUR":
                return "€";
            case "GBP":
            default:
                return "£";
        }
    };

    // const handleCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     console.log({session, isAnonymous})
    //     if (!session && !isAnonymous) {
    //         signIn();
    //     } else {
    //         console.log("Checkout");
    //         window.open("https://buy.stripe.com/9AQdROaFs7AF6bufYY");
    //     }
    // };

    const oneTimeCheckoutSession =
        api.checkout.createOneTimeCheckoutSession.useMutation();
    const oneTimeAnonCheckoutSession =
        api.checkout.createAnonOneTimeCheckoutSession.useMutation();
    const subscriptionCheckoutSession =
        api.checkout.createSubscriptionCheckoutSession.useMutation();

    const handleCheckout = async () => {
        if (!session && !isAnonymous) {
            await signIn();
            return;
        }

        const amount = customAmount
            ? parseFloat(customAmount)
            : parseFloat(selectedAmount);

        const isSubscription =
            selectedFrequency === "monthly" || selectedFrequency === "yearly";

        if (isSubscription) {
            const response = await subscriptionCheckoutSession.mutateAsync({
                amount,
                currency,
                frequency: selectedFrequency,
                anonymous: isAnonymous,
                message,
            });

            if (response.url) {
                window.open(response.url, "_blank");
            }
        } else {
            const checkoutMutation = isAnonymous
                ? oneTimeAnonCheckoutSession
                : oneTimeCheckoutSession;
            const response = await checkoutMutation.mutateAsync({
                amount,
                currency,
                anonymous: isAnonymous,
                message,
            });

            if (response.url) {
                window.open(response.url, "_blank");
            }
        }
    };

    return (
        <form className="donate-form" onSubmit={(e) => e.preventDefault()}>
            <p className="donate-welcome">
                Welcome to our donation page. Please fill out the form below.
            </p>
            <div className="currency-selector">
                <label htmlFor="currency-select">Choose a currency:</label>
                <select
                    id="currency-select"
                    value={currency}
                    onChange={handleCurrencyChange}
                    className="currency-select"
                >
                    {currencies.map(({ code, label }) => (
                        <option key={code} value={code}>
                            {code} - {label}
                        </option>
                    ))}
                </select>
            </div>
            <fieldset className="donation-amount">
                <legend>Choose a donation amount</legend>
                {donationAmounts.map((amount) => (
                    <label
                        key={amount}
                        className={`radio-label ${
                            selectedAmount === amount.toString()
                                ? "selected"
                                : ""
                        }`}
                        onClick={() => handleAmountChange(amount.toString())}
                    >
                        <input
                            type="radio"
                            name="amount"
                            value={amount}
                            className="radio-input"
                            checked={selectedAmount === amount.toString()}
                            readOnly
                        />
                        {getCurrencySymbol()}
                        {amount}
                    </label>
                ))}
                <div style={{ display: "flex" }}>
                    {/* {getCurrencySymbol()} */}
                    <input
                        type="number"
                        placeholder={`Enter a custom donation amount (${getCurrencySymbol()})`}
                        className="custom-donation-input"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                    />
                </div>
            </fieldset>
            <fieldset className="donation-frequency">
                <legend>Choose a donation frequency</legend>
                <div className="radio-buttons">
                    {frequencies.map((frequency) => (
                        <label
                            key={frequency.freq}
                            className={`radio-label ${
                                frequency.checked ? "selected" : ""
                            }`}
                            onClick={() =>
                                handleFrequencyChange(frequency.freq)
                            }
                        >
                            <input
                                type="radio"
                                name="frequency"
                                value={frequency.freq}
                                className="radio-input"
                                checked={frequency.checked}
                                readOnly
                            />
                            {frequency.freq.charAt(0).toUpperCase() +
                                frequency.freq.slice(1)}
                        </label>
                    ))}
                </div>
            </fieldset>
            <fieldset className="donation-anonymous">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="anonymous"
                        className="checkbox-input"
                        checked={isAnonymous}
                        onChange={handleAnonymousChange}
                    />
                    Do you want your donation to be anonymous?
                </label>
            </fieldset>
            <fieldset className="donation-message">
                <label htmlFor="message-input">Add a message!</label>
                <textarea
                    id="message-input"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => {
                        handleMessageChange(e);
                    }}
                    className="message-input"
                ></textarea>
            </fieldset>
            <div className="donate-buttons">
                <button type="button" className="cancel-button">
                    Cancel
                </button>
                {!session && !isAnonymous ? (
                    <>
                        <p className="login-required">
                        You need to log in to proceed with the checkout unless an anonymous donor.
                        </p>
                        <button
                            type="button"
                            className="checkout-button"
                            onClick={() => signIn()}
                        >
                            Login
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        className="checkout-button"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                )}
            </div>
        </form>
    );
};
